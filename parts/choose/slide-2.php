<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 3/5/18
 * Time: 01:23
 */ ?>
<div class="item">
    <div class="row">
        <div class="col-md-6">
            <div class="col-sm-6">
                <img src="<?= get_the_post_thumbnail_url(); ?>"
                     class="product-img img-responsive" style="max-height: 220px;">
            </div>
            <div class="col-sm-6">
                <h3><?= get_the_title(); ?> id:<?= get_the_ID() ?></h3>
                <h3>Your choice is:</h3>
                <div class="user-choice"></div>
            </div>
        </div>
        <div class="col-md-6 personal-info">
            <button class="btn btn-primary" href="#carousel-<?= $post->carousel_counter ?>" data-slide="prev">Prev Step</button>
            <div class="space-ten"></div>
            <div class="row">
		        <?php get_template_part( 'parts/choose/form' ) ?>
            </div>
        </div>
    </div>
</div>