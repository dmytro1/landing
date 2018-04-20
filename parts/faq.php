<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 1/23/18
 * Time: 23:10
 */ ?>
<!-- Questions Section -->
<?php $faq = Builder::get_faq_content();
$questions = Builder::get_questions_content(); ?>
<section class="row faqs" id="faq">
    <div class="container">
        <div class="row section-header wow fadeInUp">
            <h2><?= $faq['heading'] ?></h2>
            <p><?= $faq['text'] ?></p>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="panel-group text-left" id="accordion">
					<?php foreach ( $questions as $i => $question ) : ?>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion"
                                       href="#collapse<?= $i ?>"><?= $question['heading'] ?></a>
                                </h4>
                            </div>
                            <div id="collapse<?= $i ?>" class="panel-collapse collapse">
                                <div class="panel-body"><?= $question['text'] ?>
                                </div>
                            </div>
                        </div>
					<?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>
