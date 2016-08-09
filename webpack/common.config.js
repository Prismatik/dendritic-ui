const postcss = require('./postcss.plugin');

module.exports = {
  context: `${__dirname}/../src`,
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  postcss: postcss,
  output: {
    filename: 'index.js',
    path: `${__dirname}/../dist`
  }
};
