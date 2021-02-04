// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebpackBar = require('webpackbar');
const vueConfig = {
  publicPath: process.env.PUBLIC_PATH + '/',

  configureWebpack: {
    plugins: [new WebpackBar()]
  },

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    port: 8000
  },

  productionSourceMap: false,
  lintOnSave: true,

  transpileDependencies: []
};
module.exports = vueConfig;
