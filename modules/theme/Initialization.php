<?php

namespace modules\theme;

use WPKit\Module\AbstractThemeInitialization;

class Initialization extends AbstractThemeInitialization {

	public function add_action_wp_enqueue_scripts() {
		if ( ! is_admin() ) {
			//wp_enqueue_script( 'jquery' );
			//wp_deregister_script( 'jquery' );
		}

		// Add main style
		wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
		//wp_enqueue_style( 'font-awesome', self::get_path_to_libs() . 'fontawesome.min.css');
		wp_enqueue_style( 'bootstrap-style', self::get_path_to_libs() . 'bootstrap.min.css', array(), '', 'all' );
		wp_enqueue_style( 'main-style', get_template_directory_uri() . '/assets/css/style.css', array(), '', 'all' );
		//wp_enqueue_style( 'font-awesome-style', self::get_path_to_libs() . 'font-awesome.min.css', array(), '', 'all' );

		// Adding scripts file in the footer
		wp_enqueue_script( 'bootstrap-js', self::get_path_to_libs() . 'bootstrap.min.js', [ 'jquery' ], '', true );
		wp_enqueue_script( 'validator-js', self::get_path_to_libs() . 'validator.js', [ 'jquery' ], '', true );
		wp_enqueue_script( 'site-js', self::get_path_to_built() . 'javascripts/common.js', [], '', true );
//		wp_enqueue_script( 'validation-js', get_template_directory_uri() . '/assets/js/validation.js', [], '', true );
//		wp_register_script( 'variations-js', get_template_directory_uri() . '/assets/js/variations.js', [], '', true );

		wp_localize_script( 'site-js', 'variationsObject', [
			'dataById' => \Product::get_product_variations_by_id()
		] );
		wp_localize_script( 'site-js', 'wpApiSettings', [
			'root'  => esc_url_raw( rest_url() ),
			'nonce' => wp_create_nonce( 'wp_rest' )
		] );
		wp_enqueue_script( 'site-js' );
	}

	/**
	 * Example method for setting image sizes
	 */
	public function register_image_sizes() {

	}

	/**
	 * Example method for init nav menus
	 */
	public function register_nav_menus() {
		// Register menus
		register_nav_menus(
			array(
				'main-nav' => __( 'The Main Menu' ),   // Main nav in header
			)
		);
	}

	/**
	 * Example method for init sidebars
	 */
	public function register_dynamic_sidebars() {

		register_sidebar( array(
				'id'            => 'home-sidebar',
				'name'          => __( 'Home Sidebar', 'ufx' ),
				'description'   => __( 'Sidebar for Home Page', 'ufx' ),
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div>',
				'before_title'  => '<h4 class="widgettitle">',
				'after_title'   => '</h4>',
			)
		);
	}

	public function add_action_admin_init() {
		remove_post_type_support( 'page', 'editor' );
		//remove_post_type_support( 'product', 'editor' );

		if ( isset( $_GET['post'] ) ) {
			if ( get_post_type( $_GET['post'] ) === \modules\product\Initialization::POST_TYPE || get_post_type( $_GET['post'] ) === \modules\order\Initialization::POST_TYPE ) {
				add_filter( 'wp_editor_settings', function () {
					$settings = [
						'textarea_rows' => 3
					];

					return $settings;
				}, 10, 2 );
			}
		}
	}

	public function add_action_admin_menu() {

		// Remove Post page
		//remove_menu_page( 'edit.php' );

		//remove_meta_box( 'dashboard_recent_comments', 'dashboard', 'core' ); // Comments Widget
//		remove_meta_box( 'dashboard_incoming_links', 'dashboard', 'core' );  // Incoming Links Widget
//		remove_meta_box( 'dashboard_plugins', 'dashboard', 'core' );         // Plugins Widget
//
//		// Remove_meta_box('dashboard_quick_press', 'dashboard', 'core');  // Quick Press Widget
//		remove_meta_box( 'dashboard_recent_drafts', 'dashboard', 'core' );   // Recent Drafts Widget
//		remove_meta_box( 'dashboard_primary', 'dashboard', 'core' );         //
//		remove_meta_box( 'dashboard_secondary', 'dashboard', 'core' );       //
//
//		// Removing plugin dashboard boxes
//		remove_meta_box( 'yoast_db_widget', 'dashboard', 'normal' );         // Yoast's SEO Plugin Widget
	}

	/*
	 * Adding WP Functions & Theme Support
	 */
	public function add_action_after_setup_theme() {

		// Add Support for WP Controlled Title Tag
		add_theme_support( 'title-tag' );

		// Add custom logo
		add_theme_support( 'custom-logo' );

		// Add Thumbnails
		add_theme_support( 'post-thumbnails' );
	}

	public function get_path_to_built() {
		//return get_template_directory_uri() . '/assets/css';
		return get_template_directory_uri() . '/assets/built/';
	}

	public function get_path_to_libs() {
		//return get_template_directory_uri() . '/assets/css';
		return get_template_directory_uri() . '/assets/libs/';
	}
}
