// const path = require('path');
// const webpack = require('webpack');

// require('dotenv').config();

// module.exports = {
//   mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',

//   entry: {
//     main: path.resolve('./src/index.jsx'),
//   },

//   output: {
//     filename: '[name].js',
//     path: path.resolve('./dist'),
//   },

//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.jsx$/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env', '@babel/preset-react'],
//         },
//       },
//     ],
//   },
// };
