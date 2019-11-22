module.exports = app => {
  // 引入相关npm
  const express = require('express');
  const multer = require('multer')
  const networkConfig = require('../../config/network');
  const bcryptjs = require('bcryptjs');
  const jwt = require('jsonwebtoken');
  const assert = require('http-assert')
  
  // 引入中间件
  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resource')
  
  // 引入需要用的模型
  const AdminUser = require('../../models/AdminUser');

  // 路由配置
  const router = express.Router({
    mergeParams: true // 合并参数
  });

  // 配置上传文件路径
  const upload = multer({ dest: __dirname + '/../../uploads' })

  // -------start-通用CURD接口---------------
  app.use('/admin/api/rest/:resource',authMiddleware(), resourceMiddleware(), router);

  // 添加
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model);
  });
  // 修改
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model);
  });
  // 列表
  router.get('/', async (req, res) => {
    // populate()方法表示取出关联字段的文档
    const queryOptions = {};
    // 判断获取列表的时候是否需要关联查询
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent';
    }
    const models = await req.Model.find().setOptions(queryOptions).limit(10);
    res.send(models);
  });
  // 获取单个
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send(model);
  })
  // 删除
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndRemove(req.params.id);
    res.send({
      status: true
    });
  })
  // -------end-通用CURD接口---------------

  // -------start-上传文件---------------
  app.post('/admin/api/upload',authMiddleware(), upload.single('file'), (req, res) => {
    const file = req.file;
    file.url = networkConfig.baseURL + `uploads/${file.filename}`
    res.send(file)
  })
  // -------end-上传文件---------------

  // -------start-登录---------------
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body;
    // 1. 根据用户名找用户
    const user = await AdminUser.findOne({ username }).select('+password');
    assert(user, 422, { message: '用户不存在' });
    // 2. 校验密码
    const isValid = bcryptjs.compareSync(password, user.password);
    assert(isValid, 422, { message: '密码错误' });
    // 3. 生成token
    const token = jwt.sign({ id: user._id }, networkConfig.SECRECT);
    res.send({ token });
  })
  // -------end-登录---------------

  /**
   * 错误处理函数
   */
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}