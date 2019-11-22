// 登录校验中间件
module.exports = options => {
  const jwt = require('jsonwebtoken');
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser');
  const networkConfig = require('../config/network');
  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop();
    assert(token, 401, { message: '请先登录' })
    const { id } = jwt.verify(token, networkConfig.SECRECT);
    assert(id, 401, { message: '请先登录' })
    req.user = await AdminUser.findById(id);
    assert(req.user, 401, { message: '请先登录' })
    await next();
  }
}