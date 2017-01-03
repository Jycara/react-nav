var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
	  'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
	  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
	  './index.js' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	module: {
	  loaders: [
	    { 
	    	test: /\.(js|jsx)?$/, 
	    	exclude: /node_modules/, 
	    	// include: path.join(__dirname, 'src'),
	    	loaders: ['react-hot', 'babel-loader?presets[]=es2015&presets[]=react']
	    }
	  ]
	},
	plugins: [
	  new webpack.HotModuleReplacementPlugin()
	]
}