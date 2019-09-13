const defaultConfig = require( "@wordpress/scripts/config/webpack.config" );
const path = require( 'path' );
const blocksPath = {
	'example-3': './blocks/example-3/index.js',
	'example-4': './blocks/example-4/index.js',
};

module.exports = {
	...defaultConfig,
	entry: blocksPath,
	output: {
		filename: '[name]/index.js',
		path: path.resolve( process.cwd(), 'build' )
	},
	module: { ...defaultConfig.module }
};
