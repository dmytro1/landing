<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/31/18
 * Time: 17:28
 */

namespace modules\order;


use WPKit\Module\AbstractFunctions;
use WPKit\PostType\MetaBox;

class Functions extends AbstractFunctions {
	public static function get_meta() {
		$output = [];
		foreach ( \modules\product\Functions::get_terms() as $term ) {
			$output[ $term->slug ] = MetaBox::get( get_the_ID(), 'param', $term->slug );
		}

		return $output;
	}
}