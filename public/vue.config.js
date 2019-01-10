module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  pwa: {
    name: 'AVP',
    themeColor: '#004D40',
    msTileColor: '#ffffff'
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
          includePaths: [
              './node_modules', 'src', '.'
            ]
      }
    }
  },
  assetsDir: 'assets',
  productionSourceMap: false,
}