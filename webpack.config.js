const path = require('path');
const webpack = require('webpack');

require('dotenv').config();

module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

  entry: {
    main: path.resolve('./src/app.js'),
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },

  plugins: [
    new webpack.DefinePlugin({
      dev: JSON.stringify(process.env.KEY),
      pro: JSON.stringify(process.env.KEY),
    }),
  ],
};
