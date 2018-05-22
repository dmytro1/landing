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
                <h3 id="<?= get_page_uri(); ?>"><?= get_the_title(); ?>
                    id:<?= get_the_ID() ?></h3>
                <h3>Your choice is:</h3>
                <div class="user-choice"></div>
            </div>
        </div>
        <div class="col-md-6 personal-info" id="js-personal-info">
            <button class="btn btn-primary" href="#carousel-<?= $post->carousel_counter ?>" data-slide="prev">Prev Step</button>
            <div class="space-ten"></div>
            <div class="row">
                <form id="form-<?= get_the_ID() ?>" action="#">
                    <div class="form-group has-feedback col-sm-6">
                        <div class="input-group">
                            <span class="input-group-addon"><span
                                        class="glyphicon glyphicon-chevron-right"></span></span>
                            <input type="text" name="first_name" class="form-control input-design" minlength="3"
                                   placeholder="First Name" autocomplete="first_name" required>
                        </div>
                        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group has-feedback col-sm-6">
                        <div class="input-group">
                            <span class="input-group-addon"><span
                                        class="glyphicon glyphicon-chevron-right"></span></span>
                            <input type="text" name="last_name" class="form-control input-design" minlength="3"
                                   placeholder="Last Name" autocomplete="last_name" required>
                        </div>
                        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group has-feedback col-sm-12">
                        <div class="input-group">
                            <span class="input-group-addon"><span
                                        class="glyphicon glyphicon-chevron-right"></span></span>
                            <input type="email" name="email" class="form-control input-design"
                                   placeholder="Email Address" autocomplete="email" required>
                        </div>
                        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group has-feedback col-sm-12">
                        <div class="input-group">
                            <span class="input-group-addon"><span
                                        class="glyphicon glyphicon-chevron-right"></span></span>
                            <input type="number" name="phone" class="form-control input-design"
                                   placeholder="Phone number" autocomplete="phone" required>
                        </div>
                        <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group col-sm-12">
                        <button type="submit"
                                href="#carousel-<?= $post->carousel_counter ?>"
                                onclick="addOrder(this)"
                                data-id="<?= get_the_ID() ?>"
                                name="<?= get_page_uri(); ?>"
                                class="btn btn-primary" style="float: right">Order</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>