<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 5/30/18
 * Time: 10:06
 */ ?>
<form action="#">
	<?php $inputs = Theme::get_inputs();
	foreach ( $inputs as $input ) : ?>
        <div class="form-group <?= $input['width'] ?>">
            <div class="input-group">
                <span class="input-group-addon">
                    <span class="glyphicon <?= $input['icon'] ?>"></span>
                </span>
                <input
                        type="<?= $input['type'] ?>"
                        name="<?= $input['name'] ?>"
                        class="form-control input-design"
					    <?= $input['type'] == 'text' ? 'minlength="3"' : ''; ?>
                        placeholder="<?= $input['placeholder'] ?>"
                        autocomplete="<?= $input['name'] ?>"
                        required>
            </div>
            <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
            <div class="help-block with-errors"></div>
        </div>
	<?php endforeach; ?>

    <div class="form-group col-sm-12">
        <button type="submit"
                href="#carousel-<?= $post->carousel_counter ?>"
                onclick="App.addOrder(this)"
                data-id="<?= get_the_ID() ?>"
                name="<?= get_page_uri(); ?>"
                class="btn btn-primary" style="float: right">Order
        </button>
    </div>
</form>