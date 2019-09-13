(function( blocks, element, components ) {
	const el = element.createElement;

	blocks.registerBlockType( 'jpry/workshop-ex6', {
		title: 'JPry Block 6',
		icon: 'smiley',
		category: 'widgets',
		edit: function( props ) {
			return el( components.RangeControl, {
				value: props.attributes.count,
				min: 1,
				max: 10,
				onChange: ( val ) => props.setAttributes( { count: val } )
			} );
		},

		save: () => null

	} );
}( window.wp.blocks, window.wp.element, window.wp.components ));
