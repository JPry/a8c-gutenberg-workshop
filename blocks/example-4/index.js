/* WordPress Dependencies */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';

const THE_TEMPLATE = [
	[ 'core/image', {} ],
	[ 'core/heading', { placeholder: 'Book Title' } ],
	[ 'core/paragraph', { placeholder: 'Summary' } ],
];

registerBlockType( 'jpry/workshop-ex4', {
	title: 'JPry Block 4',
	icon: 'smiley',
	category: 'widgets',

	edit( { className } ) {
		return (
			<div className={ className }>
				<InnerBlocks
					template={ THE_TEMPLATE }
					templateLock='all'
				/>
			</div>
		);
	},

	save() {
		return (
			<div>
				<InnerBlocks.Content />
			</div>
		);
	},

} );
