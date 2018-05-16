<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 5/13/18
 * Time: 23:24
 */ ?>

<div class="gallery">
    <div class="gallery__hero">
        <a href="" class="gallery__hero-enlarge ir" data-gallery="zoom">Zoom</a>
        <img src="<?= get_the_post_thumbnail_url() ?>">
    </div>
    <div class="gallery__thumbs">
        <a href="<?= get_the_post_thumbnail_url() ?>"
           data-gallery="thumb" class="is-active">
            <img src="<?= get_the_post_thumbnail_url() ?>">
        </a>
		<?php $gallery = Product::get_gallery_images();
		if ( $gallery ) {
			foreach ( $gallery as $image ) { ?>
                <a href="<?= wp_get_attachment_image_src( $image, 'full' )[0] ?>"
                   data-gallery="thumb">
					<?= wp_get_attachment_image( $image, 'full' ) ?>
                </a>
			<?php } ?>
		<?php } ?>
    </div>
</div>