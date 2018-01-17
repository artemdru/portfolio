const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ReloadPlugin = require('reload-html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const bootstrapEntryPoints = require('./webpack.bootstrap.config');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');


const isProd = process.env.NODE_ENV === 'production'; //true or false
const bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev;


module.exports = {
	entry: {
		app: './src/js/app.js',
		bootstrap: bootstrapConfig
	},
	output: {
		path: path.resolve('dist'),
		filename: '[name].js',
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
				test: /\.(css|scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						"css-loader",
						"sass-loader",
						],
				})
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
			// alwaysWriteToDisk: true,
	      	// title: 'Custom template',
	      	template: './src/index.html',
	      	favicon: './src/assets/favicon.png'
	    }),
		new ExtractTextPlugin('style.css'),
		// new ReloadPlugin(),
		new PurifyCSSPlugin({
			paths: glob.sync(path.join(__dirname, 'src/*.html')),
			purifyOptions: {
				whitelist: ['*flickity*', 'last-proj-fixed', 'loaded']
			}
	    }),
		new HtmlWebpackHarddiskPlugin()
	]
};