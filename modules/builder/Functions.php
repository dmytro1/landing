<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/30/18
 * Time: 23:24
 */

namespace modules\builder;


use WPKit\Module\AbstractFunctions;
use WPKit\PostType\MetaBox;

class Functions extends AbstractFunctions {

	public static function get_start_content() {
		$heading  = MetaBox::get( get_the_ID(), 'start', 'heading' );
		$text     = MetaBox::get( get_the_ID(), 'start', 'text' );
		$btn_text = MetaBox::get( get_the_ID(), 'start', 'btn_text' );
		$btn_link = MetaBox::get( get_the_ID(), 'start', 'btn_link' );

		return [
			'heading'  => $heading,
			'text'     => $text,
			'btn_text' => $btn_text,
			'btn_link' => $btn_link,
		];
	}

	public static function get_how_it_works_content() {
		$heading = MetaBox::get( get_the_ID(), 'how-it-works', 'heading' );
		$text    = MetaBox::get( get_the_ID(), 'how-it-works', 'text' );

		return [
			'heading' => $heading,
			'text'    => $text,
		];
	}

	public static function get_how_it_works_items_content() {

		$item_imgs     = MetaBox::get( get_the_ID(), 'how-it-works-items', 'img' );
		$item_headings = MetaBox::get( get_the_ID(), 'how-it-works-items', 'heading' );
		$item_texts    = MetaBox::get( get_the_ID(), 'how-it-works-items', 'text' );
		$output        = [];
		if ( $item_imgs ) {
			foreach ( $item_imgs as $i => $item_img ) {
				$output[] = [
					'item_img'     => $item_img,
					'item_heading' => $item_headings[ $i ],
					'item_text'    => $item_texts[ $i ],
				];
			}
		}

		return $output;
	}

	public static function get_split_section() {

		$item_headings = MetaBox::get( get_the_ID(), 'split', 'heading' );
		$item_texts    = MetaBox::get( get_the_ID(), 'split', 'text' );
		$item_imgs     = MetaBox::get( get_the_ID(), 'split', 'img' );
		$img_positions = MetaBox::get( get_the_ID(), 'split', 'position' );

		$output = [];
		if ( $item_headings ) {
			foreach ( $item_headings as $i => $item_heading ) {
				if ( $img_positions[ $i ] === 'right' ) {
					$class_for_img  = 'col-sm-push-6';
					$class_for_text = 'col-sm-pull-6';
				} else {
					$class_for_img  = '';
					$class_for_text = '';
				}
				$output[] = [
					'item_heading'  => $item_heading,
					'item_text'     => $item_texts[ $i ],
					'item_img'      => $item_imgs[ $i ],
					'img_position'  => $class_for_img,
					'text_position' => $class_for_text
				];
			}
		}

		return $output;
	}

	public static function get_reviews_content() {
		$heading = MetaBox::get( get_the_ID(), 'reviews', 'heading' );
		$text    = MetaBox::get( get_the_ID(), 'reviews', 'text' );

		return [
			'heading' => $heading,
			'text'    => $text,
		];
	}

	public static function get_reviews_items_content() {

		$item_imgs  = MetaBox::get( get_the_ID(), 'reviews-item', 'img' );
		$item_names = MetaBox::get( get_the_ID(), 'reviews-item', 'name' );
		$item_texts = MetaBox::get( get_the_ID(), 'reviews-item', 'text' );
		$item_links = MetaBox::get( get_the_ID(), 'reviews-item', 'link' );
		$output     = [];
		if ( $item_names ) {
			foreach ( $item_names as $i => $item_name ) {
				$output[] = [
					'item_img'  => $item_imgs[ $i ],
					'item_name' => $item_name,
					'item_text' => $item_texts[ $i ],
					'item_link' => $item_links[ $i ],
				];
			}
		}

		return $output;
	}

	public static function get_faq_content() {
		$heading = MetaBox::get( get_the_ID(), 'faq', 'heading' );
		$text    = MetaBox::get( get_the_ID(), 'faq', 'text' );

		return [
			'heading' => $heading,
			'text'    => $text,
		];
	}

	public static function get_questions_content() {
		$item_headings = MetaBox::get( get_the_ID(), 'question', 'heading' );
		$item_texts    = MetaBox::get( get_the_ID(), 'question', 'text' );

		$output = [];
		if ( $item_headings ) {
			foreach ( $item_headings as $i => $item_heading ) {
				$output[] = [
					'heading' => $item_heading,
					'text'    => $item_texts[ $i ],
				];
			}
		}

		return $output;
	}

	public static function get_mobile_content() {
		$heading     = MetaBox::get( get_the_ID(), 'mobile', 'heading' );
		$text        = MetaBox::get( get_the_ID(), 'mobile', 'text' );
		$btn_text    = MetaBox::get( get_the_ID(), 'mobile', 'btn_text' );
		$btn_link    = MetaBox::get( get_the_ID(), 'mobile', 'btn_link' );
		$img         = MetaBox::get( get_the_ID(), 'mobile', 'img' );
		$bg_img      = MetaBox::get( get_the_ID(), 'mobile', 'bg_img' );
		$ios_img     = MetaBox::get( get_the_ID(), 'mobile', 'ios_img' );
		$ios_link    = MetaBox::get( get_the_ID(), 'mobile', 'ios_link' );
		$google_img  = MetaBox::get( get_the_ID(), 'mobile', 'google_img' );
		$google_link = MetaBox::get( get_the_ID(), 'mobile', 'google_link' );

		return [
			'heading'     => $heading,
			'text'        => $text,
			'btn_text'    => $btn_text,
			'btn_link'    => $btn_link,
			'img'         => $img,
			'bg_img'      => $bg_img,
			'ios_img'     => $ios_img,
			'ios_link'    => $ios_link,
			'google_img'  => $google_img,
			'google_link' => $google_link,
		];
	}

	public static function get_newsletter_content() {
		$heading          = MetaBox::get( get_the_ID(), 'newsletter', 'heading' );
		$text             = MetaBox::get( get_the_ID(), 'newsletter', 'text' );
		$placeholder      = MetaBox::get( get_the_ID(), 'newsletter', 'placeholder' );
		$unsubscribe_text = MetaBox::get( get_the_ID(), 'newsletter', 'unsubscribe_text' );

		return [
			'heading'          => $heading,
			'text'             => $text,
			'placeholder'      => $placeholder,
			'unsubscribe_text' => $unsubscribe_text,
		];
	}

	public static function get_contact_content() {
		$heading  = MetaBox::get( get_the_ID(), 'contact', 'heading' );
		$address  = MetaBox::get( get_the_ID(), 'contact', 'address' );
		$phone    = MetaBox::get( get_the_ID(), 'contact', 'phone' );
		$btn_text = MetaBox::get( get_the_ID(), 'contact', 'btn_text' );

		return [
			'heading'  => $heading,
			'address'  => $address,
			'phone'    => $phone,
			'btn_text' => $btn_text,
		];
	}

	public static function get_footer_copyright() {
		$copyright = MetaBox::get( get_the_ID(), 'footer', 'copyright' );

		return $copyright;
	}

	public static function get_footer_socials() {
		$links = MetaBox::get( get_the_ID(), 'socials', 'link' );
		$icons = MetaBox::get( get_the_ID(), 'socials', 'icon' );

		$output = [];
		if ( $links ) {
			foreach ( $links as $i => $link ) {
				$output[] = [
					'link' => $link,
					'icon' => $icons[ $i ],
				];
			}
		}

		return $output;
	}
}