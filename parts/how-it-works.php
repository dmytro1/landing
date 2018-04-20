<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/23/18
 * Time: 22:15
 */ ?>
<?php $content = Builder::get_how_it_works_content();
$items_content = Builder::get_how_it_works_items_content(); ?>
<section class="row how-it-works" id="how-it-works">
    <div class="container">
        <div class="row section-header v2 wow fadeInUp">
            <h2><?= $content['heading'] ?></h2>
            <p><?= $content['text'] ?></p>
        </div>
        <div class="row work-processes">
			<?php
			foreach ( $items_content as $item_content ) { ?>
                <div class="col-sm-4 work-process wow fadeIn">
                    <div class="row m0 process-icon">
						<?= wp_get_attachment_image( $item_content['item_img'], 'full' ) ?>
                    </div>
                    <h3><?= $item_content['item_heading'] ?></h3>
                    <p><?= $item_content['item_text'] ?></p>
                </div>
			<?php } ?>
        </div>
    </div>
</section>
