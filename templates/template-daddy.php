<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 11/9/17
 * Time: 17:09
 */
/*
 * Template Name: Daddy Apple
 */
?>
<?php //get_header(); ?>
<?php //get_template_part( 'parts/start' ); ?>
<?php //get_template_part( 'parts/how-it-works' ); ?>
<?php ////get_template_part( 'parts/about' ); ?>
<?php //get_template_part( 'parts/buy-section' ); ?>
<?php //get_template_part( 'parts/choose' ); ?>
<?php //get_template_part( 'parts/split-images' ); ?>
<?php //get_template_part( 'parts/reviews' ); ?>
<?php //get_template_part( 'parts/faq' ); ?>
<?php //get_template_part( 'parts/mobile-app' ); ?>
<?php //get_template_part( 'parts/newsletter' ); ?>
<?php //get_template_part( 'parts/contact' ); ?>
<?php //get_footer(); ?>

<?php
$context         = Timber::get_context();
$context['menu'] = new Timber\Menu( 'top-nav' );

$custom_logo_id  = get_theme_mod( 'custom_logo' );
$logo            = wp_get_attachment_image_url( $custom_logo_id, 'full', true );
$context['logo'] = $logo;

$post            = new Timber\Post();
$context['post'] = $post;

$args = [
	'post_type'      => 'product',
	'order'          => 'DESC',
	'posts_per_page' => 9,
	'post_status'    => 'publish'
];

$context['products']      = Timber\Timber::get_posts( $args );
$context['price_message'] = Product::output_price_message();

$context['form_inputs'] = Theme::get_inputs();

$args                     = [
	'taxonomy'   => 'parameter',
	'hide_empty' => false,
];
$context['product_terms'] = Timber::get_terms( $args );

$context['product_variations'] = Product::get_product_variations();

//var_dump( $context['product_variations'] );

Timber::render( 'templates/daddy.twig', $context );