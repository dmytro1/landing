<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 11/6/17
 * Time: 14:23
 */

require_once __DIR__ . "/vendor/autoload.php";
$loader = new \WPKit\Module\Loader();
$loader->load_modules();

//add_action( 'rest_api_init', 'create_api_posts_meta_field' );
//
//function create_api_posts_meta_field() {
//
//	// register_rest_field ( 'name-of-post-type', 'name-of-field-to-return', array-of-callbacks-and-schema() )
//	register_rest_field( 'post', 'post-meta-fields', array(
//			'get_callback'    => 'get_post_meta_for_api',
//			'schema'          => null,
//		)
//	);
//}
//
//function get_post_meta_for_api( $object ) {
//	//get the id of the post object array
//	$post_id = $object['id'];
//
//	//return the post meta
//	return get_post_meta( $post_id );
//}
