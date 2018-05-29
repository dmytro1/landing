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
        <div class="product-info">
            <div class="col-md-6 product_img">
				<?php get_template_part( 'parts/choose/gallery' ) ?>
            </div>
            <div class="col-md-6 product_content">
                <h3><?= get_the_title(); ?></h3>
                <p>id:<?= get_the_ID() ?></p>
                <div class="rating">
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    <span class="glyphicon glyphicon-star"></span>
                    (rating)
                </div>
                <div class="price" data-price="<?= Product::output_price() ?>">
					<?= Product::output_price_message() ?>
                </div>
                <div class="row">
					<?php if ( ! empty( Product::get_product_variations() ) ) : ?>
						<?php foreach ( $terms as $term ) :
							if ( $term->slug === 'price' ) {
								continue;
							} ?>
                            <div class="form-group col-sm-6 col-xs-6">
                                <select class="form-control input-design"
                                        onchange="onChangeSelect(this)"
                                        name="<?= $term->slug ?>"
                                        data-id="<?= get_the_ID() ?>">
                                    <option value="">- Select <?= $term->name ?> -</option>
									<?php foreach ( $options = Product::get_options( $term->term_id ) as $option ) : ?>
                                        <option <?= Product::is_disabled( $option ) ?>
                                                value="<?= strtolower( preg_replace( '/\s+/', '', $option ) ) ?>"><?= trim( $option ) ?></option>
									<?php endforeach; ?>
                                </select>
                            </div>
						<?php endforeach; ?>
					<?php endif; ?>
					<?php if ( ! empty( Product::get_product_variations() ) ) : ?>
                        <p class="error-message"></p>
					<?php endif; ?>
                    <div class="form-group col-sm-6 col-xs-6">
                        <label for="">Quantity</label>
                        <input type="number" name="quantity" class="form-control quantity input-design"
                               placeholder="Quantity" min="1" autocomplete="quantity" value="1" required>
                    </div>
                </div>
                <button onclick="checkoutBtn(this)" data-id="<?= get_the_ID() ?>" class="btn btn-primary"
                        href="#carousel-<?= $post->carousel_counter ?>"
                        data-slide="next" <?php if ( ! empty( Product::get_product_variations() ) ) {
					echo 'disabled';
				} ?>>Checkout
                </button>
                <br><br>
                <div><?= get_the_content() ?></div>
            </div>
        </div>
    </div>
</div>
