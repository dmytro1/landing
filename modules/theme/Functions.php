<?php

namespace modules\theme;


use Detection\MobileDetect;
use modules\theme\classes\Topbar_Menu_Walker;
use WPKit\AdminPage\OptionPage;
use WPKit\Module\AbstractFunctions;
use WPKit\PostType\MetaBox;
use WPKit\Options\Option;

class Functions extends AbstractFunctions {

	public static function top_nav() {
		wp_nav_menu( array(
			'container'      => false,                           // Remove nav container
			'menu_class'     => 'site-main-menu',       // Adding custom nav class
			'items_wrap'     => '<ul id="%1$s" class="nav navbar-nav navbar-right" data-responsive-menu="accordion medium-dropdown">%3$s</ul>',
			'theme_location' => 'main-nav',                    // Where it's located in the theme
			'depth'          => 5,                                   // Limit the depth of the nav
			'fallback_cb'    => false,                         // Fallback function (see below)
//			'walker'         => new Topbar_Menu_Walker()
		) );
	}

	public static function footer_nav() {
		wp_nav_menu( array(
			'container'      => false,                           // Remove nav container
			'menu_class'     => 'site-main-menu',       // Adding custom nav class
			'items_wrap'     => '<ul id="%1$s" class="nav footer-menu" data-responsive-menu="accordion medium-dropdown">%3$s</ul>',
			'theme_location' => 'main-nav',                    // Where it's located in the theme
			'depth'          => 5,                                   // Limit the depth of the nav
			'fallback_cb'    => false,                         // Fallback function (see below)
//			'walker'         => new Topbar_Menu_Walker()
		) );
	}

	public static function get_logo_url() {
		if ( function_exists( 'the_custom_logo' ) ) {
			$custom_logo_id = get_theme_mod( 'custom_logo' );
			$logo           = wp_get_attachment_image_src( $custom_logo_id, 'full' );
			$logo_url       = $logo[0];

			return $logo_url;
		}
	}

	public static function is_mobile() {
		$detect = new MobileDetect();

		return $detect->isMobile() ? $detect->isMobile() : false;
	}

	public static function get_inputs() {
		$result = [];
		for ( $i = 1; $i <= 5; $i ++ ) {
			$name        = Option::get( 'input' . $i . '_name' );
			$placeholder = Option::get( 'input' . $i . '_placeholder' );
			$type        = Option::get( 'input' . $i . '_type' );
			$width       = Option::get( 'input' . $i . '_width' );
			$icon        = Option::get( 'input' . $i . '_icon' );

			if ( ! empty( $name ) ) {
				$result[] = [
					'name'        => $name,
					'placeholder' => $placeholder,
					'type'        => $type,
					'width'       => $width,
					'icon'        => $icon,
				];
			}
		}

		return $result;
	}

	public static function get_input_attr( string $name ) {
		$result = [];
		for ( $i = 1; $i <= 5; $i ++ ) {
			$attr = Option::get( 'input' . $i . '_' . $name );

			if ( ! empty( $attr ) ) {
				$result[] = $attr;
			}
		}

		return $result;
	}
}