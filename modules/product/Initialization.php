<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/31/18
 * Time: 17:27
 */

namespace modules\product;

use WPKit\Fields\Select;
use WPKit\Module\AbstractModuleInitialization;
use WPKit\PostType\MetaBox;
use WPKit\PostType\MetaBoxRepeatable;
use WPKit\PostType\PostType;
use WPKit\Taxonomy\Taxonomy;

class Initialization extends AbstractModuleInitialization {

	const POST_TYPE = 'product';
	const TAX_NAME = 'parameter';
	const VARIATION_META = 'variations';

	public function add_action_admin_enqueue_scripts() {
		if ( get_post_type() == Initialization::POST_TYPE ) {
			wp_enqueue_script( 'admin-js', get_template_directory_uri() . '/admin/js/admin.js' );
		}
	}

	public function register_post_type() {
		$post_type = new PostType( self::POST_TYPE, 'Product', [ 'menu_name' => 'Products' ] );
		$post_type->set_menu_icon( 'dashicons-list-view' );
		$post_type->set_publicly_queryable( false );
		$post_type->set_public( false );
		//$post_type->set_show_in_rest( true );
		$this->add_parameters_taxonomy( self::POST_TYPE );
		$this->add_parameters_metabox( self::POST_TYPE );
		$this->add_gallery_metabox( self::POST_TYPE );
	}

	public function add_parameters_metabox( $post_type ) {

		$metabox_price = new MetaBox( 'meta', 'Price (if no Product variations)' );
		$metabox_price->set_priority( 'high' );
		$metabox_price->add_field( 'price', 'Price', 'Number' );

		$metabox = new MetaBoxRepeatable( self::VARIATION_META, 'Variations' );
		$metabox->set_priority( 'high' );

		foreach ( $terms = Functions::get_terms() as $term ) {
			if ( $term->slug === 'price' ) {
				$metabox->add_field( $term->slug, $term->name, 'Number' );
			} else {
				$metabox->add_field( $term->slug, $term->name, function () use ( $term ) {
					$s = new Select();
					foreach ( $options = Functions::get_options( $term->term_id ) as $option ) {
						$s->set_options( [ strtolower( preg_replace( '/\s+/', '', $option ) ) => trim( $option ) ] );
					}
					$s->set_placeholder( '- Select -' );

					return $s;
				} );
			}
		}
		$metabox->add_post_type( $post_type );
		$metabox_price->add_post_type( $post_type );
	}

	public function add_gallery_metabox( $post_type ) {
		$gallery = new MetaBox( 'gallery', 'Gallery' );
		$gallery->add_field( 'image1', 'Image 1', 'Image' );
		$gallery->add_field( 'image2', 'Image 2', 'Image' );
		$gallery->add_field( 'image3', 'Image 3', 'Image' );
		$gallery->add_post_type( $post_type );
	}

	public function add_parameters_taxonomy( $post_type ) {
		$tax = new Taxonomy( self::TAX_NAME, 'Parameters', [
			'name'          => __( 'Parameters' ),
			'all_items'     => __( 'All parameters' ),
			'edit_item'     => __( 'Edit parameter' ),
			'add_new_item'  => __( 'Add new parameter' ),
			'new_item_name' => __( 'New parameter' ),
		] );
		$tax->add_custom_field( 'options', 'Options', 'Textarea' );
		$tax->set_public( true );
		$tax->set_capabilities( [
			'manage_terms' => 'manage_categories',
			'edit_terms'   => 'edit_categories',
			'delete_terms' => 'delete_categories',
			'assign_terms' => 'assign_categories',
		] );
		$tax->set_pluralize( true );
		$tax->set_rewrite( true );
		$tax->set_hierarchical( false );

		$tax->add_post_type( $post_type );
	}

	// Add Variable Price as required field
	public function add_action_registered_taxonomy( $taxonomy ) {
		if ( $taxonomy === self::TAX_NAME ) {
			if ( ! term_exists( 'price', self::TAX_NAME ) ) {
				wp_insert_term(
					'price',
					self::TAX_NAME,
					[
						'description' => 'Variable Price',
						'slug'        => 'price'
					]
				);
			}
		}
	}
}