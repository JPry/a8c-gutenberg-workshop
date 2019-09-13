/* WordPress Dependencies */
import { registerBlockType } from '@wordpress/blocks';

registerBlockType( 'jpry/workshop-ex3', {
	title: 'JPry Block 3',
	icon: 'smiley',
	category: 'widgets',

	edit: ( { className } ) => {
		return (<p className={className}>Hola JPry.</p>);
	},

	save: ( { className } ) => {
		return (<p className={className}>Hola JPry.</p>);
	},
} );
