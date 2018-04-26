<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 4/25/18
 * Time: 09:43
 */ ?>
<div class="item">
    <div class="row">
        <div class="col-md-10">
            <div class="col-sm-6">
                <img src="<?= get_the_post_thumbnail_url(); ?>"
                     class="product-img img-responsive" style="max-height: 220px;">
            </div>
            <div class="col-sm-6">
                <h3>Thanks for your order. Your order details:</h3>
                <p><?= get_the_title(); ?></p>
                <p>id: <?= get_the_ID() ?></p>
                <div class="user-order"></div>
            </div>
        </div>
        <div class="col-md-2">
            <button class="btn btn-primary" href="#carousel-<?= $post->carousel_counter ?>" data-slide="prev">Prev Step</button>
            <div class="space-ten"></div>
        </div>
    </div>
</div>
