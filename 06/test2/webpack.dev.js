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
	},

	resolve: {//require(��./myFile��) �� ���� �� Ȯ���ڸ� import�ϰ� �����ִ� ����
		modules: ['node_modules'],
		extensions: ['.js', '.json', '.jsx', '.scss']
	}
});
