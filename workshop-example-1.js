(function() {
	const blocks = wp.blocks;
	const el = wp.element.createElement;

	blocks.registerBlockType( 'jpry/workshop-ex1', {
		title: 'JPry workshop block 1',
		icon: 'smiley',
		category: 'widgets',
		edit: function( props ) {
			return el( 'p', { className: props.className }, 'Hello JPry' );
		},
		save: function() {
			return el( 'p', {}, 'Hello JPry' );
		}
	} );
}());
