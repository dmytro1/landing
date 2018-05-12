<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/31/18
 * Time: 17:28
 */

namespace modules\product;


use WPKit\Module\AbstractFunctions;
use WPKit\PostType\MetaBox;
use WPKit\Taxonomy\Taxonomy;

class Functions extends AbstractFunctions {

	public static function get_products() {
		$query = new \WP_Query( [
			'post_type'      => Initialization::POST_TYPE,
			'order'          => 'DESC',
			'posts_per_page' => - 1,
			'post_status'    => 'publish'
		] );

		return $query;
	}

	public static function get_terms() {
		$tax   = new \WP_Term_Query( [
			'taxonomy'   => Initialization::TAX_NAME,
			'hide_empty' => false,

		] );
		$terms = $tax->terms;

		return $terms;
	}

	public static function get_static_price() {
		$price = MetaBox::get( get_the_ID(), 'meta', 'price' );

		return $price;
	}

	public static function get_minimum_var_price() {
		//var_dump( self::get_variation_prices() );
		if ( is_array( self::get_variation_prices() ) ) {
			return min( self::get_variation_prices() );
		}
	}

	public static function output_price_message() {
		if ( ! empty( $min_price = self::get_minimum_var_price() ) ) {
			return '<p>from <span class="red-price">' . $min_price . '$</span></p>';
		} elseif ( $static_price = self::get_static_price() ) {
			return '<h3><span class="red-price">' . $static_price . '$</span></h3>';
		} else {
			return 'Price not set';
		}
	}

	public static function output_price() {
		if ( ! empty( $min_price = self::get_minimum_var_price() ) ) {
			return $min_price;
		} elseif ( $static_price = self::get_static_price() ) {
			return $static_price;
		} else {
			return '-';
		}
	}

	public static function get_variation_prices() {
		$prices = MetaBox::get( get_the_ID(), Initialization::VARIATION_META, 'price' );

		//$prices = MetaBox::get( 1897, Initialization::VARIATION_META, 'price' );

		return $prices;
	}

	public static function get_product_variations_by_id( $id = null ) {
		global $post;
		$tmp_post = $post;
		$result   = [];
		$products = self::get_products();
		while ( $products->have_posts() ) {
			$products->the_post();
			if ( ! empty( self::get_product_variations() ) ) {
				$result[ get_the_ID() ] = self::get_product_variations();
			}

			//var_dump(MetaBox::get( get_the_ID(), Initialization::VARIATION_META, $param_key )) ;

			//$ids[] = get_the_ID();
		}
//		wp_reset_postdata();
		$post = $tmp_post;
		if ( is_null( $id ) ) {
			return $result;
		}

		return isset( $result[ $id ] ) ? $result[ $id ] : [];
	}

	public static function get_products_terms() {
		$slugs = [];
		$terms = self::get_terms();
		foreach ( $terms as $term ) {
			$slugs[] = $term->slug;
		}

		return $slugs;
	}

	//Without price field
	public static function get_product_variations() {

		$keys = $variations = $output = [];

		foreach ( $terms = self::get_terms() as $term ) {
			if ( $term !== 'price' ) {
				$keys[] = $term->slug;
			}
		}

		foreach ( $keys as $param_key ) {
			$param_array = MetaBox::get( get_the_ID(), Initialization::VARIATION_META, $param_key );
//			$param_array              = MetaBox::get( 1897, Initialization::VARIATION_META, $param_key );
			$variations[ $param_key ] = $param_array;
		}

		foreach ( $variations as $key => $variation ) {
			if ( ! empty( $variation ) ) {
				foreach ( $variation as $i => $variation_item ) {
					$output[ $i ][ $key ] = $variation_item;
				}
			}
		}

		return $output;
	}

	public static function get_param_options( $term_id ) {
		return Taxonomy::get_custom_field_value( $term_id, 'options' );
	}

	public static function get_options( $term_id ) {
		$options_field = trim( self::get_param_options( $term_id ) );
		$options       = explode( "\n", $options_field );

		return $options;
	}

	public static function is_disabled( $option ) {
		$variations = self::get_product_variations_by_id( get_the_ID() );
		$option     = trim( strtolower( $option ) );

		$result = false;

		foreach ( $variations as $variation ) {
			$search = array_search( $option, $variation );
			if ( $search ) {
				return '';
			} else {
				$result = true;
			}
		}

		if ( $result ) {
			return 'disabled';
		}
	}
}