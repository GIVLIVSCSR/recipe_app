const path = require('path');


module.exports = {
  context: __dirname,
  entry: './src/index.jsx',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    //hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
     	{
     		test: /\.sass$/,
     		use: [
     			'style-loader',
     			'css-loader',
     			'sass-loader'
     		]    		
     	},
     	{
     		test: /\.(jpe?g|png|gif|svg)&/i,
     		use: 'file-loader?name=[path][name].[ext]'
     	}
    ]
  }
};
