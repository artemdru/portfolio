var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ReloadPlugin = require('reload-html-webpack-plugin');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var bootstrapEntryPoints = require('./webpack.bootstrap.config');

var isProd = process.env.NODE_ENV === 'production'; //true or false

var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;

module.exports = {
	entry: {
		app: './src/js/app.js',
		bootstrap: bootstrapConfig
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
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
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|gif|ttf|eot)$/,
					use: [
					'file-loader'
					]
			},
			{
				test: /\.(woff2?)$/, loader: 'url-loader?limit=10000'
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