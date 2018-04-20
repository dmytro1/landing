<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 4/4/18
 * Time: 17:34
 */


$uri = $_SERVER[ REQUEST_URI ];
$slugs = explode( '/', substr( $uri, 1 ) );

if ($slugs[0] == 'trading' && $slugs[1] && $slugs[2] ) {
	get_template_part( 'parts/nav' );
} else {
	echo '<p> Page not found </p>';
}