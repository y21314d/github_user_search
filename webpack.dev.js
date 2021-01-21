const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './app/main.js',
	output: {
		filename: './dist/bundle.[hash].js',
		path:  __dirname + '/',
	},
	resolve: {
		modules: [
			"node_modules",
		],
		extensions: [".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react'],
						plugins: [
							["import", { libraryName: "antd", style: "css", }],
							"transform-class-properties",
							"transform-object-rest-spread",
							"react-hot-loader/babel",
							"syntax-dynamic-import"
						]
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new webpack.DefinePlugin({
			ENV: JSON.stringify("dev")
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './template.html'
		})
	]
};