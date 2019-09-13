(function( hooks, element ) {
	const el = element.createElement;

	hooks.addFilter( 'blocks.registerBlockType', 'a8c/workshop-ex5', ( settings ) => {

		if ( settings.name !== 'core/code' ) {
			return settings;
		}

		const newSettings = {
			...settings,

			edit: function( props ) {
				return el( 'p', {}, 'Here I am in your code.' );
			},

			save: function( props ) {
				return el( 'p', {}, 'Here I am in your code.' );
			},
		};
		return newSettings;
	} );
}( window.wp.hooks, window.wp.element ));
