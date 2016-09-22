const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const mainCSS = new ExtractTextPlugin('dendritic-ui.css', { allChunks: true });

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, '../src/styles')],
        loader: mainCSS.extract(
          'style',
          [
            'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss'
          ].join('!')
        )
      }
    ]
  },
  plugins: [
    mainCSS,
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  output: {
    libraryTarget: 'umd',
    library: 'dendritic-ui'
  }
};
