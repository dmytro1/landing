<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 5/13/18
 * Time: 23:24
 */ ?>

<div class="gallery" id="gallery-<?= $post->carousel_counter ?>">
    <div class="gallery__hero">
		<?php if ( ! Theme::is_mobile() ) : ?>
            <a href="" class="gallery__hero-enlarge ir" data-gallery="zoom">Zoom</a>
		<?php endif; ?>
        <img src="<?= get_the_post_thumbnail_url() ?>">
    </div>
    <div class="gallery__thumbs">
        <a href="<?= get_the_post_thumbnail_url() ?>"
           data-gallery="thumb" class="is-active">
            <img src="<?= get_the_post_thumbnail_url() ?>">
        </a>
		<?php $gallery = Product::get_gallery_images();
		if ( $gallery ) :
			foreach ( $gallery as $image ) : ?>
                <a href="<?= wp_get_attachment_image_src( $image, 'full' )[0] ?>"
                   data-gallery="thumb">
					<?= wp_get_attachment_image( $image, 'full' ) ?>
                </a>
			<?php endforeach; ?>
		<?php endif; ?>
    </div>
</div>