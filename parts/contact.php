<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/23/18
 * Time: 23:40
 */ ?>
<?php $content = Builder::get_contact_content(); ?>
<section class="row contact" id="contact">
    <div class="col-lg-12">
        <div class="contact-box">
            <h2><?= $content['heading'] ?></h2>
            <ul class="nav">
                <li><?= $content['address'] ?></li>
                <li><?= $content['phone'] ?></li>
            </ul>
            <button class="flip-contact-box btn btn-block"><?= $content['btn_text'] ?></button>
        </div>
    </div>
</section>
