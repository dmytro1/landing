<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/23/18
 * Time: 22:08
 */
?>
<!-- HEADER -->
<?php $content = Builder::get_start_content(); ?>
<header style="background: url(<?= get_the_post_thumbnail_url(); ?>) no-repeat scroll center bottom; background-size: cover" id="header">
    <div class="top-banner row m0 text-center fadeInOnLoad">
        <div class="container">
            <h2><?= $content['heading'] ?></h2>
            <p><?= $content['text'] ?></p>
            <a href="<?= $content['btn_link'] ?>" class="btn btn-primary scroll_btn btn-lg"><?= $content['btn_text'] ?></a>
            <div class="row apple-watch">
                <img src="<?= get_template_directory_uri() ?>/assets/built/images/6.png" alt="" class="watch_img">
            </div>
        </div>
    </div>
</header>
