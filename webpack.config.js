var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom', 'react-router', 'react-redux', 'redux-thunk']
  },
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js', Infinity),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': '"production"'
    //   }
    // })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
