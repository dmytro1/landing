<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/23/18
 * Time: 22:58
 */ ?>
<!-- Instagram Section -->
<?php $content = Builder::get_reviews_content();
$items_content = Builder::get_reviews_items_content(); ?>
<section id="feedack" class="section grey-section" id="feedack">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 heading">
                <h2 class="page-header"><?= $content['heading'] ?></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
					<?php foreach ( $items_content as $item_content ) : ?>
                        <div class="col-lg-4 col-sm-6 text-center insta">
                            <a href="<?= $item_content['item_link'] ?>/" target="_blank" class="insta-link">
                                <img class="img-circle img-responsive img-center"
                                     src="<?= wp_get_attachment_image_url( $item_content['item_img'] ) ?>" alt="">
                                <h4><?= $item_content['item_name'] ?></h4>
                            </a>
                            <blockquote><p><?= $item_content['item_text'] ?></p>
                            </blockquote>
                        </div>
					<?php endforeach; ?>
                </div>
            </div>
        </div>
        <div class="row">
			<?= $content['text'] ?>
        </div>
    </div>
</section>

