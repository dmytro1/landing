<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/23/18
 * Time: 23:25
 */ ?>
<!-- Mobile App Section -->
<?php $content = Builder::get_mobile_content(); ?>
<section class="row mobile-app" id="app">
    <div class="container">
        <div class="row">
            <div class="col-sm-6  wow fadeInUp">
		        <?= wp_get_attachment_image( $content['img'], 'full' ) ?>
		        <?= wp_get_attachment_image( $content['bg_img'] ) ?>
            </div>
            <div class="col-sm-6  wow fadeIn">
                <h2><?= $content['heading'] ?></h2>
                <p><?= $content['text'] ?></p>
                <a href="<?= $content['btn_link'] ?>" class="btn btn-custom-3 scroll_btn"><?= $content['btn_text'] ?></a>
                <div class="row m0 downloads-btns">
                    <a href="<?= $content['ios_link'] ?>" class="dload-link"><?= wp_get_attachment_image( $content['ios_img'], 'full' ) ?></a>
                    <a href="<?= $content['google_link'] ?>" class="dload-link"><?= wp_get_attachment_image( $content['google_img'], 'full' ) ?></a>
                </div>
            </div>
        </div>
    </div>
</section>
