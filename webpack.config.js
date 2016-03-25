var path = require('path');
module.exports = {
	context: path.normalize(__dirname + '/public'),
	entry: {
		'common/jsb/tpl':'./common/js/tpl',
		// 'common/jsb/b5m_host':'./common/js/b5m_host',
	},
	output: {
		path: __dirname+'/public/',
		filename: '[name].js',
		chunkFilename: '[name].js',
		libraryTarget: "amd"
		// library:'test',
		// publicPath: './dist/',
	},
	resolve: {
	},
	module: {
		loaders: [
			{
				exclude: /(node_modules|bower_components)/,
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{test:/\.scss$/, loader:'style-loader!css-loader!sass-loader'},
			{test:/\.css$/, loader:'style-loader!css-loader'},
			{test:/\.css$/, loader:'style-loader!css-loader'},
			{test:/\.(png|jpg)$/, loader:'url-loader?limit=8192'},
			{test:/\.tpl/, loader: "ejs-loader?variable=data"},
			// {test:/\.tpl/, loader: "html-loader?variable=data"},
		]
	},
	plugins: []
};
