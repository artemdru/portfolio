var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ReloadPlugin = require('reload-html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						"css-loader",
						"sass-loader",
						],
				})
			},
			{
				test: /\.(png|svg|jpg|gif|ttf)$/,
					use: [
					'file-loader'
					]
			}
		]
	},
	devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			jquery: 'jquery',
			'window.jQuery': 'jquery',
			Tether: 'tether',
			Popper: ['popper.js', 'default'],
			Util: "exports-loader?Util!bootstrap/js/dist/util",
        	Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
		}),
		new HtmlWebpackPlugin({
			alwaysWriteToDisk: true,
	      	title: 'Custom template',
	      	template: './src/index.html',
	    }),
		new ExtractTextPlugin('style.css'),
		// new ReloadPlugin(),
		new HtmlWebpackHarddiskPlugin()
	]
};