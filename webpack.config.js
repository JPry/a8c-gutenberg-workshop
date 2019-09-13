const defaultConfig = require( "@wordpress/scripts/config/webpack.config" );
const path = require( 'path' );
const glob = require( 'glob' );
const findBlocks = () => {
	const globs = glob.sync( './blocks/**/index.js' );
	let blocks = {};
	globs.map( ( glob ) => {
		const name = path.basename( path.dirname( glob ) );
		blocks[ name ] = glob;
	} );

	return blocks;
};

module.exports = {
	...defaultConfig,
	entry: findBlocks(),
	output: {
		filename: '[name]/index.js',
		path: path.resolve( process.cwd(), 'build' )
	},
	module: { ...defaultConfig.module }
};
