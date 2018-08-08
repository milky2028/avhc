module.exports = {
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
              'node_modules', 'src', '.'
            ]
      }
    }
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: 'assets',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined
}