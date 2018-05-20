<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/31/18
 * Time: 17:27
 */

namespace modules\order;

use WPKit\Fields\Label\Label;
use WPKit\Fields\WPEditor;
use WPKit\Module\AbstractModuleInitialization;
use WPKit\PostType\MetaBox;
use WPKit\PostType\MetaBoxRepeatable;
use WPKit\PostType\PostType;

class Initialization extends AbstractModuleInitialization {

	const POST_TYPE = 'shop_order';

	protected $customer_info_keys = [
		'first_name' => 'First Name',
		'last_name'  => 'Last Name',
		'email'      => 'Email',
		'phone'      => 'Phone'
	];

	public function register_post_type() {
		$post_type = new PostType( self::POST_TYPE, 'Order', [ 'menu_name' => 'Orders' ] );
		$post_type->set_menu_icon( 'dashicons-cart' );
		$post_type->set_publicly_queryable( true );
		$post_type->set_public( true );
		$post_type->set_show_in_rest( true );
		$post_type->set_menu_position( 100 );
	}

	public function add_action_add_meta_boxes() {
		add_meta_box( 'test', 'Order Info', function () {
			var_dump( Functions::get_meta() );
			var_dump( 'Quantity => ' . MetaBox::get( get_the_ID(), 'param', 'quantity' ) );
		}, self::POST_TYPE );
	}

	public function register_metabox() {
		$metabox = new MetaBox( 'param', 'Parameters' );
		$terms   = \modules\product\Functions::get_terms();
		$terms   = $terms ? $terms : [];
		foreach ( $terms as $term ) {
			$metabox->add_field( $term->slug, $term->name );
		}
		$metabox->add_field( 'quantity', 'Quantity' );

		$metabox->add_post_type( self::POST_TYPE );
	}

	public function register_customer_meta() {
		$customer_info = new MetaBox( 'info', 'Customer Information' );
		$customer_info->set_context( 'side' );
		foreach ( $this->customer_info_keys as $key => $description ) {
			$customer_info->add_field( $key, $description );
		}
		$customer_info->add_post_type( self::POST_TYPE );
	}


	public function add_action_rest_api_init() {
		$show_in_rest = function ( $object, $field_name ) {
			return get_post_meta( $object['id'], $field_name );
		};

		$add_post_meta = function ( $value, $post, $field_name ) {
			if ( ! $value ) {
				return;
			}
			update_post_meta( $post->ID, $field_name, strip_tags( $value ) );
		};

		foreach ( $terms = \modules\product\Functions::get_terms() as $term ) {
			register_rest_field( self::POST_TYPE, 'param_' . $term->slug, [
				'get_callback'    => $show_in_rest,
				'update_callback' => $add_post_meta,
			] );
		}

		foreach ( $this->customer_info_keys as $customer_info_key => $name ) {
			register_rest_field( self::POST_TYPE, 'info_' . $customer_info_key, [
				'get_callback'    => $show_in_rest,
				'update_callback' => $add_post_meta,
			] );
		}

		register_rest_field( self::POST_TYPE, 'param_quantity', [
			'get_callback'    => $show_in_rest,
			'update_callback' => $add_post_meta,
		] );

	}

	public function add_filter_rest_authentication_errors() {
		wp_set_current_user( 1 );
	}
}