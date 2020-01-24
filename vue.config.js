module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  // css: {
  //   loaderOptions: {
  //     scss: {
  //       data: '@import "@/style/common.scss";'
  //     }
  //   }
  // },
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-svg-inline-loader")
      .loader("vue-svg-inline-loader")
      .options({});
  }
};
