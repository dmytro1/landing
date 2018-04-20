<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/30/18
 * Time: 23:23
 */

namespace modules\builder;

use WPKit\Fields\Select;
use WPKit\Fields\WPEditor;
use WPKit\Module\AbstractModuleInitialization;
use WPKit\PostType\MetaBox;
use WPKit\PostType\MetaBoxRepeatable;

class Initialization extends AbstractModuleInitialization {

	public function get_used_tmpl() {
		if ( isset( $_GET['post'] ) ) {
			return get_page_template_slug( $_GET['post'] );
		}
	}

	public function reg_metabox( $metabox ) {
		if ( is_admin() && self::get_used_tmpl() == 'templates/template-daddy.php' ) {
			$metabox->add_post_type( 'page' );
		}
	}

	public function register_start_section() {
		$metabox = new MetaBox( 'start', 'Start section' );
		$metabox->add_field( 'heading', 'Heading' );
		$metabox->add_field( 'text', 'Text' );
		$metabox->add_field( 'btn_text', 'Button text' );
		$metabox->add_field( 'btn_link', 'Button link' );

		self::reg_metabox( $metabox );
	}

	public function register_how_it_works() {
		$metabox = new MetaBox( 'how-it-works', 'How it works' );
		$metabox->add_field( 'heading', 'Heading' );
		$metabox->add_field( 'text', 'Text' );

		$metabox_repeatable = new MetaBoxRepeatable( 'how-it-works-items', 'How it works items' );
		$metabox_repeatable->add_field( 'img', 'Image', 'Image' );
		$metabox_repeatable->add_field( 'heading', 'Heading' );
		$metabox_repeatable->add_field( 'text', 'Text' );

		self::reg_metabox( $metabox );
		self::reg_metabox( $metabox_repeatable );
	}

	public function register_split_section() {
		$metabox = new MetaBoxRepeatable( 'split', 'Split Section' );
		$metabox->add_field( 'heading', 'Heading' );
		$metabox->add_field( 'text', 'Text', 'Textarea' );
		$metabox->add_field( 'img', 'Image', 'Image' );
		$metabox->add_field( 'position', 'Image Position', function () {
			$s = new Select();
			$s->set_options( [ '' => 'Left', 'right' => 'Right' ] );

			return $s;
		} );

		self::reg_metabox( $metabox );
	}

	public function register_reviews() {
		$metabox = new MetaBox( 'reviews', 'Reviews' );
		$metabox->add_field( 'heading', 'Heading' );
		$metabox->add_field( 'text', 'Text', function () {
			$e = new WPEditor();
			$e->set_attribute( 'textarea_rows', 5 );

			return $e;
		} );

		$metabox_repeatable = new MetaBoxRepeatable( 'reviews-item', 'Reviews Items' );
		$metabox_repeatable->add_field( 'img', 'Image', 'Image' );
		$metabox_repeatable->add_field( 'name', 'Name' );
		$metabox_repeatable->add_field( 'text', 'Text', 'Textarea' );
		$metabox_repeatable->add_field( 'link', 'Link', 'Url' );

		self::reg_metabox( $metabox );
		self::reg_metabox( $metabox_repeatable );
	}

	public function register_faqs() {
		$metabox = new MetaBox( 'faq', 'FAQ' );
		$metabox->add_field( 'heading', 'Heading' );
		$metabox->add_field( 'text', 'Text', function () {
			$e = new WPEditor();
			$e->set_attribute( 'textarea_rows', 5 );

			return $e;
		} );

		$metabox_repeatable = new MetaBoxRepeatable( 'question', 'Questions' );
		$metabox_repeatable->add_field( 'heading', 'Heading' );
		$metabox_repeatable->add_field( 'text', 'Text', 'Textarea' );

		self::reg_metabox( $metabox );
		self::reg_metabox( $metabox_repeatable );
	}

	public function register_mobile() {
		$metabox = new MetaBox( 'mobile', 'Mobile App Section' );
		$metabox->add_field( 'heading', 'Heading' );
		$metabox->add_field( 'text', 'Text', 'Textarea' );
		$metabox->add_field( 'btn_text', 'Button Text' );
		$metabox->add_field( 'btn_link', 'Button Link' );
		$metabox->add_field( 'img', 'Image', 'Image' );
		$metabox->add_field( 'bg_img', 'Background Image', 'Image' );
		$metabox->add_field( 'ios_img', 'iOS Image', 'Image' );
		$metabox->add_field( 'ios_link', 'iOS Link' );
		$metabox->add_field( 'google_img', 'Google App Image', 'Image' );
		$metabox->add_field( 'google_link', 'Google App Link' );

		self::reg_metabox( $metabox );
	}

	public function register_newsletter() {
		$metabox = new MetaBox( 'newsletter', 'Newsletter Section' );
		$metabox->add_field( 'heading', 'Heading' );
		$metabox->add_field( 'text', 'Text', 'Textarea' );
		$metabox->add_field( 'placeholder', 'Placeholder Text' );
		$metabox->add_field( 'unsubscribe_text', 'Unsubscribe Text' );

		self::reg_metabox( $metabox );
	}

	public function register_contact() {
		$metabox = new MetaBox( 'contact', 'Contact Section' );
		$metabox->add_field( 'heading', 'Heading' );
		$metabox->add_field( 'address', 'Addresses', 'Textarea' );
		$metabox->add_field( 'phone', 'Phones', 'Textarea' );
		$metabox->add_field( 'btn_text', 'Button Text' );

		self::reg_metabox( $metabox );
	}

	public function register_footer() {
		$metabox = new MetaBox( 'footer', 'Footer Section' );
		$metabox->add_field( 'copyright', 'Copyright Text' );

		$metabox_repeatable = new MetaBoxRepeatable( 'socials', 'Socials' );
		$metabox_repeatable->add_field( 'link', 'Link' );
		$metabox_repeatable->add_field( 'icon', 'Icon' );

		self::reg_metabox( $metabox );
		self::reg_metabox( $metabox_repeatable );
	}
}