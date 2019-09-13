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
	$dependencies_path = __DIR__ . '/build/example-3/index.deps.json';
	$dependencies      = $dependencies_path
		? json_decode( file_get_contents( $dependencies_path ), true )
		: [];

	wp_register_script(
		'jpry-gb-workshop-3',
		plugins_url( 'build/example-3/index.js', __FILE__ ),
		$dependencies
	);

	register_block_type( 'jpry/workshop-ex3', [
		'editor_script' => 'jpry-gb-workshop-3',
	] );
} );
