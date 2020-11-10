## NODE-VUE-MOBA

> 王者荣耀官网（仿）

### preview

- [点我预览](https://moba.liangbb.top/)

### 项目说明

这是我练习移动端网站开发的demo项目，只做了首页、新闻详情页、英雄详情页，前端页面展示内容可在后台进行配置

项目组成：

- 前端网站（web）
- 简易后台管理系统（admin）
- 服务端（server）

涉及的技术栈：

- 移动端开发（rem适配）
- vue.js
- node.js
- express
- mongodb

技术难点

1. 首屏加载优化
    - `webpack-bundle-analyzer`分析打包大小
    - ui组件`按需引用`
    - 路由改成`懒加载`方式引入
    - `cdn`优化，vue全家桶和一些不常变动的库走cdn，图片因为没钱所以没走cdn，将就一下吧
    - nginx开启`gzip`（这个最重要！）
2. 移动端适配
3. 自定义小型样式库，类似`bootstrap`
4. 首页轮播图，新版本vue-awesome-swiper的坑很多
5. vue组件模块封装
6. 遵循H5 CSS3最新规范

### 备注

该项目只是个人练习项目，如有问题欢迎探讨

