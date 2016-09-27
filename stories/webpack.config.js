const postcss = require('../webpack/postcss.plugin');

module.exports = {
  module: {
    loaders: [
      {
        test: /fonts\/.*?\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file?name=fonts/[name].[ext]'
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      }
    ]
  },
  postcss: postcss
};
