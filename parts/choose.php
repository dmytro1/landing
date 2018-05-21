<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 3/5/18
 * Time: 01:19
 */ ?>
<?php $products = Product::get_products(); ?>
<section id="choose" style="">
    <a class="close-btn scroll_btn" data-attr="<?= get_the_ID(); ?>" href="#buy">
        <img src="<?= get_template_directory_uri() ?>/assets/built/images/close.png" class="img_responsive">
    </a>
    <div class="container-fluid">
        <div class="row">
			<?php $i = 1;
			while ( $products->have_posts() ) :
				$products->the_post();
				$post->carousel_counter = $i; ?>
                <div class="collapse-section" id="section-<?= get_the_ID() ?>">
                    <div id="carousel-<?= $i ?>" class="carousel slide" data-ride="carousel" data-interval="false">
                        <!-- Indicators -->
                        <ol class="carousel-indicators" style="color: #000;">
                            <li class="active"></li>
                            <li></li>
                            <li></li>
                        </ol> <!-- Wrapper for slides -->
                        <div class="container">
                            <div class="carousel-inner" style="">
								<?php get_template_part( 'parts/choose/slide-1' ) ?>
								<?php get_template_part( 'parts/choose/slide-2' ) ?>
								<?php get_template_part( 'parts/choose/slide-3' ) ?>
                            </div>
                        </div>

                        <!-- Controls -->
                        <a class="left carousel-control" href="#carousel-<?= $i ?>" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a class="right carousel-control" href="#carousel-<?= $i ?>" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>

                </div>
				<?php $i ++; endwhile;
			wp_reset_postdata();
			?>
        </div>
    </div>
</section>