<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/23/18
 * Time: 22:56
 */ ?>
<?php $items_content = Builder::get_split_section(); ?>
<section class="row split-columns" id="gallery">
	<?php foreach ( $items_content as $item_content ) : ?>
        <div class="row m0 split-column wow fadeIn">
            <div class="col-sm-6 image text-right <?= $item_content['img_position'] ?>">
				<?= wp_get_attachment_image( ( $item_content['item_img'] ), 'full' ) ?>
            </div>
            <div class="col-sm-6 texts <?= $item_content['text_position'] ?>">
                <div class="texts-inner row m0">
                    <h2><?= $item_content['item_heading'] ?></h2>
                    <p><?= $item_content['item_text'] ?></p>
                </div>
            </div>
        </div>
	<?php endforeach; ?>
</section>
