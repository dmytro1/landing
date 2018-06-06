<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/23/18
 * Time: 22:20
 */ ?>
<!-- Buy Section -->
<?php $products = Product::get_products(); ?>
<!-- Choose section -->
<section id="buy" class="section" style="background-color: #eeeeee ">
    <div class="container">
        <div class="row text-center">
			<?php while ( $products->have_posts() ) :
				$products->the_post(); ?>
                <div class="col-md-4 col-sm-6 hero-feature">
                    <div class="thumbnail">
                        <img src="<?= get_the_post_thumbnail_url(); ?>">
                        <div class="caption">
                            <h3><?= get_the_title(); ?></h3>
                            <p>Here will be excerpt</p>
                            <p><span><?= Product::output_price_message() ?></span>
                            </p>
                            <a onclick="App.toggleChooseSections(this)" href="#choose"
                               class="btn model scroll_btn" type="button"
                               data-id="<?= get_the_ID() ?>">CHOOSE</a>
                        </div>
                    </div>
                </div>
			<?php endwhile;
			wp_reset_postdata();
			?>
        </div>
    </div>
</section>