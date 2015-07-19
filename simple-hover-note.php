<?php
/**
 * Plugin Name: Simple Hover Note
 * Description: Adds a popup on hover that displays text you can add in the admin
 */

class simpleHoverNote {

	function __construct() {


		add_action( 'init', array($this, 'custom_note_buttons') );

		add_filter( 'mce_css', array($this, 'custom_editor_style') );

		wp_enqueue_style( 'simple-hover-note-css', plugins_url().'/simple-hover-note/plugin.css');

	}

	function custom_note_buttons() 
	{
	
		add_filter('mce_external_plugins', array($this, 'simplehoverbuttons_register_tinymce_javascript'));

		add_filter('mce_buttons', array($this, 'simplehoverbuttons_register_buttons'));
	
	}

	function custom_editor_style( $mce_css ){
	 
	    $mce_css .= ', ' . plugins_url( 'plugin.css', __FILE__ );
	    return $mce_css;
	}

	function simplehoverbuttons_register_tinymce_javascript($plugin_array) 
	{
	   $plugin_array['simplehovernote'] = plugins_url('plugin.js',__FILE__);
	   //die(var_dump($plugin_array));
	   return $plugin_array;
	}

	function simplehoverbuttons_register_buttons($buttons) 
	{
	   array_push($buttons, 'simplehovernote');
	   //die(var_dump($buttons));
	   return $buttons;
	}
	
}

$simpleHoverNote = new simpleHoverNote();