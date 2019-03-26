const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, 'dist'),
    routes: [
      '/',
      '/about',
      '/return-policy',
      '/terms-and-conditions',
      '/privacy-policy'
    ]
  })
];

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins);
    }
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
        includePaths: ['./node_modules', 'src', '.']
      }
    }
  },
  assetsDir: 'assets',
  productionSourceMap: false
};
