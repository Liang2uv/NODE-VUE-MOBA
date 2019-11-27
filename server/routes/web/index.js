module.exports = app => {
  const express = require('express');
  const router = express.Router();

  // web端接口
  app.use('/web/api', router);

  // 引入模型
  const Category = require('../../models/Category');
  const Article = require('../../models/Article');
  const Hero = require('../../models/Hero');
  const heroInitData = require('../../test/heroInit.json')

  // 初始化文章（新闻）数据（不做接口）
  router.get('/news/init', async (req, res) => {
    const parent = await Category.findOne({
      name: '新闻资讯'
    })
    const cats = await Category.find().where({
      parent: parent
    }).lean()
    const newsTitles = ["KPL限定皮肤爆料丨天狼星创始人，幕后老板即将登场", "腾讯游戏品牌全新升级：Spark More去发现，无限可能", "圣斗士联动！信物熔铸赢【圣斗士系列皮肤】", "张靓颖西施英雄主打歌翻唱大赛，参与活动打榜赢靓颖签名照！", "天后张靓颖倾情献唱，王者荣耀西施主打歌《幻纱之灵》正式上线", "11月26日全服不停机更新公告", "11月22日体验服停机更新公告", "11月20日体验服不停机更新公告", "【已修复】网络波动导致部分召唤师无法登录异常说明", "中国大陆以外地区服务器更换升级公告"];
    const newsList = newsTitles.map(item => {
      const randomCats = cats.slice(0).sort((a, b) => Math.random() - 0.5);
      return {
        title: item,
        category: randomCats.slice(0, 2)
      }
    })
    await Article.deleteMany({});
    await Article.insertMany(newsList)
    res.send(newsList)
  })
  // 初始化英雄数据
  /**
   * $$('.hero-nav > li').map((li, i) => {return {name: li.innerText, heros: $$('li', $$('.hero-list')[i]).map(el => {return {name: $$('h3', el)[0].innerHTML, avatar: $$('img', el)[0].src}})}}).slice(1)
   */
  router.get('/heroes/init', async (req, res) => {
    const rawData = heroInitData;
    await Hero.deleteMany({})
    let data = [];
    for (let cat of rawData) {
      const category = await Category.findOne({
        name: cat.name
      })
      cat.heros.map(hero => {
        hero.category = [category]
        return hero
      })
      data = data.concat(cat.heros)
    }
    await Hero.insertMany(data)
    res.send('ok')
  })

  // 获取新闻资讯列表
  router.get('/news/list', async (req, res) => {
    // 聚合查询
    const parent = await Category.findOne({
      name: '新闻资讯'
    })
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: 'articles',
          localField: '_id',
          foreignField: 'category',
          as: 'list'
        }
      },
      {
        $addFields: {
          list: { $slice: ['$list', 5] }
        }
      }
    ])
    const subCats = cats.map(v => v._id)
    cats.unshift({
      name: '热门',
      list: await Article.find().where({
        category: { $in: subCats }
      }).populate('category').limit(5).lean()
    })
    cats.map(cat => {
      cat.list.map(news => {
        news.categoryName = cat.name === '热门' ? news.category[0].name : cat.name;
        return news;
      })
      return cat;
    })
    res.send(cats)
  })
  // 获取文章详情
  router.get('/articles/:id', async (req, res) => {
    const data = await Article.findById(req.params.id).lean()
    data.related = await Article.find().where({
      category: { $in: data.category }
    }).limit(2)
    res.send(data)
  })

  // 获取英雄列表
  router.get('/heroes/list', async (req, res) => {
    // 聚合查询
    const parent = await Category.findOne({
      name: '英雄列表'
    })
    const cats = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: 'heroes',
          localField: '_id',
          foreignField: 'category',
          as: 'herolist'
        }
      }
    ])
    const subCats = cats.map(v => v._id)
    cats.unshift({
      name: '热门',
      herolist: await Hero.find().where({
        category: { $in: subCats }
      }).limit(10).lean()
    })
    res.send(cats)
  })

  // 获取英雄详情
  router.get('/heroes/:id', async (req, res) => {
    const data = await Hero.findById(req.params.id).populate('category').lean()
    res.send(data)
  })
}