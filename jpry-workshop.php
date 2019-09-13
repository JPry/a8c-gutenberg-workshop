<?php
/**
 * Plugin Name: JPry Gutenberg Workshop plugin
 * Plugin URI:
 * Description:
 * Version: 1.0
 * Author: Jeremy Pry
 * Author URI: http://jeremypry.com/
 * License: GPL2
 */

// Prevent direct access to this file
if ( ! defined( 'ABSPATH' ) ) {
	die( "You can't do anything by accessing this file directly." );
}

add_action( 'init', function() {
	/**
	 * @param string $path
	 *
	 * @return array
	 */
	$get_deps = function( $path ) {
		return file_exists( $path )
			? json_decode( file_get_contents( $path ), true )
			: [];
	};

	// Example 1.
	wp_register_script(
		'jpry-gb-workshop-1',
		plugins_url( 'workshop-example-1.js', __FILE__ ),
		[ 'wp-blocks', 'wp-element' ]
	);

	register_block_type( 'jpry/workshop-ex1', [
		'editor_script' => 'jpry-gb-workshop-1',
	] );

	// Example 2.
	wp_register_script(
		'jpry-gb-workshop-2',
		plugins_url( 'workshop-example-2.js', __FILE__ ),
		[ 'wp-blocks', 'wp-element', 'wp-editor' ]
	);

	register_block_type( 'jpry/workshop-ex2', [
		'editor_script' => 'jpry-gb-workshop-2',
	] );

	// Example 3
	wp_register_script(
		'jpry-gb-workshop-3',
		plugins_url( 'build/example-3/index.js', __FILE__ ),
		$get_deps( __DIR__ . '/build/example-3/index.deps.json' )
	);

	register_block_type( 'jpry/workshop-ex3', [
		'editor_script' => 'jpry-gb-workshop-3',
	] );

	// Example 4
	wp_register_script(
		'jpry-gb-workshop-4',
		plugins_url( 'build/example-4/index.js', __FILE__ ),
		$get_deps( __DIR__ . '/build/example-4/index.deps.json' )
	);

	register_block_type( 'jpry/workshop-ex4', [
		'editor_script' => 'jpry-gb-workshop-4',
	] );

	// Example 6
	wp_register_script(
		'jpry-gb-workshop-6',
		plugins_url( 'build/example-6/index.js', __FILE__ ),
		$get_deps( __DIR__ . '/build/example-6/index.deps.json' )
	);

	register_block_type( 'jpry/workshop-ex6', [
		'editor_script' => 'jpry-gb-workshop-6',
		'attributes'    => [
			'count' => [
				'type'    => 'number',
				'default' => 1,
			],
		],
		'render_callback' => function( $attributes ) {
			// imagine doing something more interesting
			$plus1 = $attributes['count'] + 1;
			return "<h3>" . esc_html( $plus1 ) . "</h3>";
		},
	] );
} );
