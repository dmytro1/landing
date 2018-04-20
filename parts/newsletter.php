<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/23/18
 * Time: 23:40
 */ ?>
<?php $content = Builder::get_newsletter_content(); ?>
<section class="row newsletter">
    <div class="container">
        <div class="row section-header wow fadeInUp">
            <h2><?= $content['heading'] ?></h2>
            <p><?= $content['text'] ?></p>
        </div>
        <form action="php/subscribe.php" id="subscribeform" class="row newsletter-form" method="post">
            <div class="input-group">
                <input type="email" class="form-control" name="email" placeholder="<?= $content['placeholder'] ?>">
                <span class="input-group-addon">
                    <button type="submit" id="js-subscribe-btn"><img src="" alt=""> >> </button>
                </span>
            </div>
            <div id="js-subscribe-result" class="text-center"
                 data-success-msg="Almost finished. Please check your email and verify.">
                <p>
                    <img src="" alt=""><?= $content['unsubscribe_text'] ?>
                </p>
            </div>
        </form>
    </div>
</section>
