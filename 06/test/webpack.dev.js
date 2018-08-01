const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',

	devServer: {
		contentBase: './dist',
		hot: true
	},

	devtool: 'inline-module-source-map',

	performance: {
		hints: false//js �뷮�� 250kb �̻��� ��� webpack���� ��� �޽����� ǥ�� 'warning'/ 'error'
	}
});
