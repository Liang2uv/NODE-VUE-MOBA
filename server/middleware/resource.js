module.exports = options => {
  const inflection = require('inflection');
  return (req, res, next) => {
    // 以下是处理请求Model的中间件
    const modelName = inflection.classify(req.params.resource);
    const Model = require(`../models/${modelName}`);
    // 挂载到req上，方便后续操作使用
    req.Model = Model;
    next();
  }
}