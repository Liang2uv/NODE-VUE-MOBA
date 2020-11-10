module.exports = {
  // outputDir: __dirname + '/../server/web',
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/'
  //   : '/'
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter',
    }
  },
  chainWebpack: (config) => {
    config
      .plugin("webpack-bundle-analyzer")
      .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
  },
  devServer: {
    // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
    proxy: {
      '/web/api': {
        target: process.env.APP_API_PROXY_TARGET,
        ws: false,
        changeOrigin: true
      }
    }
  },
  productionSourceMap: false
};
