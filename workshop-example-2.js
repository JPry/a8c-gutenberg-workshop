(function(blocks, editor, element){
	const el = element.createElement;
	const RichText = editor.RichText;

	blocks.registerBlockType( 'jpry/workshop-ex2', {
		title: 'JPry block 2',
		icon: 'smiley',
		category: 'widgets',

		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
		},

		edit: function( props ) {
			return el(
				RichText,
				{
					tagName: 'p',
					className: props.className,
					onChange: ( val ) => props.setAttributes( { content: val } ),
					value: props.attributes.content,
					placeholder: 'This is just a placeholder :)'
				}
			)
		},

		save: function( props ) {
			return el( RichText.Content, {
				tagName: 'p',
				value: props.attributes.content,
			});
		}
	});
}(window.wp.blocks, window.wp.editor, window.wp.element));
