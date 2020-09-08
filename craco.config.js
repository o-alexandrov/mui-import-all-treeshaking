const { BundleAnalyzerPlugin } = require(`webpack-bundle-analyzer`);

module.exports = {
  webpack: {
    configure(webpackConfig) {
      webpackConfig.plugins.push(new BundleAnalyzerPlugin());

      return webpackConfig;
    },
  },
};
