<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 3/5/18
 * Time: 01:22
 */ ?>
<?php $terms = Product::get_terms(); ?>
<div class="item active">
    <div class="row">
        <div id="js-product-info" class="product-info">
            <div class="col-md-6 product_img">
                <img src="<?= get_the_post_thumbnail_url(); ?>"
                     class="product-img img-responsive" style="max-height: 220px;">
	            <?php get_template_part( 'parts/gallery' ) ?>
            </div>
            <div class="col-md-6 product_content">
                <h3 id="<?= get_page_uri(); ?>"><?= get_the_title(); ?>
                    id:<?= get_the_ID() ?></h3>
                <div class="rating">
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    (rating)
                </div>
                <div id="<?= get_the_ID() . '-price' ?>"
                     data-price="<?= Product::output_price() ?>"><?= Product::output_price_message() ?></div>
                <div class="row">
		            <?php if ( ! empty( Product::get_product_variations() ) ) : ?>
						<?php foreach ( $terms as $term ) :
							if ( $term->slug === 'price' ) {
								continue;
							} ?>
                            <div class="col-sm-6 col-xs-6">
                                <select class="form-control input-design"
                                        onchange="selectOnClick(this)"
                                        name="<?= $term->slug ?>"
                                        id="<?= get_the_ID() . '-' . $term->slug ?>"
                                        data="<?= get_the_ID() ?>">
                                    <option value="">- Select <?= $term->name ?> -</option>
									<?php foreach ( $options = Product::get_options( $term->term_id ) as $option ) : ?>
                                        <option <?= Product::is_disabled( $option ) ?>
                                                value="<?= strtolower( preg_replace( '/\s+/', '', $option ) ) ?>"><?= trim( $option ) ?></option>
									<?php endforeach; ?>
                                </select>
                            </div>
						<?php endforeach; ?>
					<?php endif; ?>
                </div>
	            <?php if ( ! empty( Product::get_product_variations() ) ) : ?>
                    <p class="error-message" id="message-<?= get_the_ID() ?>"></p>
	            <?php endif; ?>
                <button onclick="checkoutBtn(this)" data-checkout="<?= get_the_ID() ?>" class="btn btn-primary"
                        href="#carousel-<?= $post->carousel_counter ?>"
                        data-slide="next" <?php if ( ! empty( Product::get_product_variations() ) ) {
		            echo 'disabled';
	            } ?>>Checkout</button><br><br>
                <div><?= get_the_content() ?></div>
            </div>
        </div>
    </div>
</div>
