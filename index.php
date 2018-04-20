<?php get_header(); ?>

<?php get_template_part('parts/nav') ?>

<!-- HEADER -->
<header>
    <div class="container header">
        <div class="row">
            <div class="col-md-offset-1 col-md-4">
                <div class="form">
                    <form id="defaultForm" action="form-ok.php" method="post">
                        <div class="form-group">
                            <label for="sel1">Выберите iPhone: &nbsp;&nbsp;</label>
                            <select name="model" class="btn btn-lg btn-default select">
                                <option value="iphone5s">iPhone 5S</option>
                                <option value="iphone6">iPhone 6</option>
                                <option value="iphone6plus">iPhone 6+</option>
                                <option value="iphone6s">iPhone 6S</option>
                                <option value="iphone6splus">iPhone 6S+</option>
                                <option value="iphone7">iPhone 7</option>
                                <option value="iphone7plus">iPhone 7+</option>
                            </select>
                        </div>
                        <div class="device-color">
                            <h5>Выберите цвет</h5>
                            <div class="btn-group" data-toggle="buttons">
                                <label class="btn silver radio-btn-1 radius-right-left">
                                    <input type="radio" name="color" autocomplete="off" value="silver" required>
                                    <span class="fa check fa-check-circle-o"></span><span class="tip"> SILVER</span>
                                </label>

                                <label class="btn gold radio-btn-1 radius-right-left">
                                    <input type="radio" name="color" autocomplete="off" value="gold" required>
                                    <span class="fa check fa-check-circle-o"></span><span class="tip"> GOLD</span>
                                </label>

                                <label class="btn space radio-btn-1 radius-right-left">
                                    <input type="radio" name="color" autocomplete="off" value="space" required>
                                    <span class="fa check fa-check-circle-o"></span><span class="tip"> GRAY</span>
                                </label>

                                <label class="btn rose radio-btn-1 radius-right-left">
                                    <input type="radio" name="color" autocomplete="off" value="rose" required>
                                    <span class="fa check fa-check-circle-o"></span><span class="tip"> ROSE</span>
                                </label>

                                <label class="btn black radio-btn-1 radius-right-left">
                                    <input type="radio" name="color" autocomplete="off" value="black" required>
                                    <span class="fa check fa-check-circle-o"></span><span class="tip"> BLACK</span>
                                </label>
                            </div>
                        </div>
                        <br>
                        <div class="memory">
                            <h5>Выберите память</h5>
                            <div class="btn-group" data-toggle="buttons">
                                <label class="btn 16gb btn-default radio-btn-2 radius-right-left">
                                    <input type="radio" name="memory" autocomplete="off" value="16GB" required>
                                    <span class="fa check fa-check-circle-o"></span><span class="tip"> 16GB</span>
                                </label>

                                <label class="btn 23gb btn-default radio-btn-2 radius-right-left">
                                    <input type="radio" name="memory" autocomplete="off" value="32GB" required>
                                    <span class="fa check fa-check-circle-o"></span><span class="tip"> 32GB</span>
                                </label>

                                <label class="btn 64gb btn-default radio-btn-2 radius-right-left">
                                    <input type="radio" name="memory" autocomplete="off" value="64GB" required>
                                    <span class="fa check fa-check-circle-o"></span><span class="tip"> 64GB</span>
                                </label>

                                <label class="btn 128gb btn-default radio-btn-2 radius-right-left">
                                    <input type="radio" name="memory" autocomplete="off" value="128GB" required>
                                    <span class="fa check fa-check-circle-o"></span><span class="tip"> 128GB</span>
                                </label>

                                <label class="btn 256gb btn-default radio-btn-2 radius-right-left">
                                    <input type="radio" name="memory" autocomplete="off" value="256GB" required>
                                    <span class="fa check fa-check-circle-o"></span><span class="tip"> 256GB</span>
                                </label>
                            </div>
                        </div>
                        <br><br>
                        <div class="form-group">
                            <!--                            <label class="control-label" for="name">Iм'я</label>-->
                            <input type="text" class="form-control" name="name" data-minlength="3"
                                   data-error="Введите имя" placeholder="Ваше имя" required>
                            <div class="help-block with-errors"></div>
                        </div>
                        <div class="form-group">
                            <!--                            <label for="phone">Телефон</label>-->
                            <input type="tel" class="form-control" id="phone1" name="phone" placeholder="Ваш телефон"
                                   data-error="Введите телефон" required>
                            <div class="help-block with-errors"></div>
                        </div>

                        <div class="text-center">
                            <button type="submit" class="btn btn-custom-1 ">Узнать цену</button>
                        </div>

                    </form>
                </div>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <img class="img-responsive" src="<?= get_template_directory_uri() ?>/assets/img/6.png">
            </div>
        </div>

    </div>
</header>

<section class="section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 heading">
                <h2 class="section-heading">Daddy Apple</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="row">
                    <div class="col-md-6">
                        <div class="feature-item">
                            <h3>Б/у iPhone как альтернатива новым моделям</h3>
                            <p>Как известно, Apple iPhone довольно дорогое удовольствие и являются одними
                                из самых дорогих в своем классе. Из-за отсутствия официальных дилеров в Украине,
                                к сожалению, мы наблюдаем завышенные цены на всю продукцию Apple, но к счатью <strong>выход
                                    есть!</strong></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-item">
                            <img src="<?= get_template_directory_uri() ?>/assets/img/photo1.jpg">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="feature-item">
                            <img class="" width="250" src="<?= get_template_directory_uri() ?>/assets/img/sale.png">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="feature-item">
                            <h3>Нет смысла переплачивать</h3>
                            <p>Покупка б/у iPhone стала такой же нормальной практикой, как и покупка подержанных
                                автомобилей. Наш отдел контроля качества тщательно проверяет каждый телефон и не
                                допустит в продажу потделку или недоброкачественный товар! Покупая у нас, вы не
                                только экономите в среднем до 30% своих средств но и будете уверены в качестве своего
                                будущего телефона!</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</section>

<!-- Photo Section -->
<section id="about" class="section grey-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 heading">
                <h2 class="section-heading">Нам доверилось более 1000 клиентов!</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-10 col-md-offset-1">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/small/sccs1.jpg">
                    </div>
                    <div class="col-md-3">
                        <img class="img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/small/sccs2.jpg">
                    </div>
                    <div class="col-md-3">
                        <img class="img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/small/sccs7.jpg">
                    </div>
                    <div class="col-md-3">
                        <img class="img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/small/sccs9.jpg">
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/small/sccs10.jpg">
                    </div>
                    <div class="col-md-3">
                        <img class="img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/small/sccs11.jpg">
                    </div>
                    <div class="col-md-3">
                        <img class="img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/small/sccs12.jpg">
                    </div>
                    <div class="col-md-3">
                        <img class="img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/small/sccs13.jpg">
                    </div>
                </div>


            </div>

        </div>
        <br><br><br>
        <div class="row">
            <a href="https://www.instagram.com/_daddy_apple_" target="_blank" class="btn btn-custom-2">Больше отзывов в
                нашем Instagram аккаунте</a>
        </div>
    </div>
</section>


<!-- Buy Section -->
<section id="buy" class="section">
    <div class="container">
        <div class="row text-center">
            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="<?= get_template_directory_uri() ?>/assets/img/iphone5.jpg">
                    <div class="caption">
                        <h3>iPhone 5s</h3>
                        <p>от 5000 грн </p>
                        <a href="#" data-toggle="modal" data-target="#squarespaceModal" name="iphone5s"
                           class="btn model btn-custom-3">ЗАКАЗАТЬ</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="<?= get_template_directory_uri() ?>/assets/img/iphone6.jpg">
                    <div class="caption">
                        <h3>iPhone 6</h3>
                        <p>от 7500 грн </p>
                        <a href="#" data-toggle="modal" data-target="#squarespaceModal" name="iphone6"
                           class="btn model btn-custom-3">ЗАКАЗАТЬ</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="<?= get_template_directory_uri() ?>/assets/img/iphone6.jpg">
                    <div class="caption">
                        <h3>iPhone 6+</h3>
                        <p>от 8000 грн </p>
                        <a href="#" data-toggle="modal" data-target="#squarespaceModal" name="iphone6plus"
                           class="btn model btn-custom-3">ЗАКАЗАТЬ</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="<?= get_template_directory_uri() ?>/assets/img/iphone6.jpg">
                    <div class="caption">
                        <h3>iPhone 6S</h3>
                        <p>от 10000 грн </p>
                        <a href="#" data-toggle="modal" data-target="#squarespaceModal" name="iphone6s"
                           class="btn model btn-custom-3">ЗАКАЗАТЬ</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="<?= get_template_directory_uri() ?>/assets/img/iphone6.jpg">
                    <div class="caption">
                        <h3>iPhone 6S+</h3>
                        <p>от 15000 грн </p>
                        <a href="#" data-toggle="modal" data-target="#squarespaceModal" name="iphone6splus"
                           class="btn model btn-custom-3">ЗАКАЗАТЬ</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="<?= get_template_directory_uri() ?>/assets/img/iphone7.png">
                    <div class="caption">
                        <h3>iPhone 7</h3>
                        <p>от 18000 грн </p>
                        <a href="#" data-toggle="modal" data-target="#squarespaceModal" name="iphone7"
                           class="btn model btn-custom-3">ЗАКАЗАТЬ</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="<?= get_template_directory_uri() ?>/assets/img/iphone7+.png">
                    <div class="caption">
                        <h3>iPhone 7+</h3>
                        <p>от 20000 грн </p>
                        <a href="#" data-toggle="modal" data-target="#squarespaceModal" name="iphone7plus"
                           class="btn model btn-custom-3">ЗАКАЗАТЬ</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 col-sm-6 hero-feature">
                <div class="thumbnail">
                    <img src="<?= get_template_directory_uri() ?>/assets/img/tradein.jpg">
                    <div class="caption">
                        <h3>Обмен</h3>
                        <p>Индивидуально</p>
                        <a href="#" data-toggle="modal" class="btn btn-custom-3">ЗАКАЗАТЬ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Order Section -->
<section id="order" style="background-color: #f6f7f9">
    <div class="container">
        <div class="row ">
            <h2 style="font-size: 40px">Как мы работаем:</h2>
        </div>
    </div>
<!--    <img class="img-responsive" src="--><?//= get_template_directory_uri() ?><!--/assets/img/work.jpg">-->
</section>


<section class="section ">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 heading">
                <h2 class="section-heading">Почему люди покупают именно у нас?</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table cellpadding="0" cellspacing="" class="table table-striped table-bordered">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Доски обьявлений</th>
                        <th>Другие магазины</th>
                        <th>DADDY APPLE</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">Гарантия</th>
                        <td><i class="fa fa-times fa-3x text-danger" aria-hidden="true"></i></td>
                        <td><i class="fa fa-times fa-3x text-danger" aria-hidden="true"></i><span
                                    style="font-size: 32px;"> / </span><i class="fa fa-check fa-3x text-success"
                                                                          aria-hidden="true"></i></td>
                        <td><i class="fa fa-check fa-3x text-success" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">Цена</th>
                        <td><i class="fa fa-times fa-3x text-danger" aria-hidden="true"></i></td>
                        <td><i class="fa fa-times fa-3x text-danger" aria-hidden="true"></i></td>
                        <td><i class="fa fa-check fa-3x text-success" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">Отзывы</th>
                        <td><i class="fa fa-times fa-3x text-danger" aria-hidden="true"></i></td>
                        <td><i class="fa fa-times fa-3x text-danger" aria-hidden="true"></i></td>
                        <td><i class="fa fa-check fa-3x text-success" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">Шоу-рум</th>
                        <td><i class="fa fa-times fa-3x text-danger" aria-hidden="true"></i></td>
                        <td><i class="fa fa-times fa-3x text-danger" aria-hidden="true"></i><span
                                    style="font-size: 32px;"> / </span><i class="fa fa-check fa-3x text-success"
                                                                          aria-hidden="true"></i></td>
                        <td><i class="fa fa-check fa-3x text-success" aria-hidden="true"></i></td>
                    </tr>
                    <tr>
                        <th scope="row">Диагностика</th>
                        <td><i class="fa fa-times fa-3x text-danger" aria-hidden="true"></i></td>
                        <td><i class="fa fa-times fa-3x text-danger" aria-hidden="true"></i><span
                                    style="font-size: 32px;"> / </span><i class="fa fa-check fa-3x text-success"
                                                                          aria-hidden="true"></i></td>
                        <td><i class="fa fa-check fa-3x text-success" aria-hidden="true"></i></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
<!-- Instagram Section -->
<section id="feedack" class="section grey-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 heading">
                <h2 class="page-header">Отзывы наших клиентов</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 text-center insta">
                        <a href="https://www.instagram.com/" target="_blank" class="insta-link">
                            <img class="img-circle img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/insta1.jpg" alt="">
                            <h4>Катя
                                <small>г. Киев</small>
                            </h4>
                        </a>
                        <blockquote><p>"Мне все понравилось. Я оперативно получала ответы на возникающие вопросы."</p>
                        </blockquote>
                    </div>
                    <div class="col-lg-3 col-sm-6 text-center insta">
                        <a href="https://www.instagram.com/" target="_blank" class="insta-link">
                            <img class="img-circle img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/insta2.jpg" alt="">
                            <h4>Валя
                                <small>г. Луцк</small>
                            </h4>
                        </a>
                        <blockquote><p>"Пересмотрела все сайты обьявлений в поисках iPhone, но побоялась недобросовесных
                                продавцов. Решила купить с гарантией на этом сайте."</p>
                        </blockquote>
                    </div>
                    <div class="col-lg-3 col-sm-6 text-center insta">
                        <a href="https://www.instagram.com/" target="_blank" class="insta-link">
                            <img class="img-circle img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/insta3.jpg" alt="">
                            <h4>Диана
                                <small>г. Львов</small>
                            </h4>
                        </a>
                        <blockquote><p>"Один из немногих сайтов, где можно купить качественную "б.у.шку" за адекватною
                                цену."</p>
                        </blockquote>
                    </div>
                    <div class="col-lg-3 col-sm-6 text-center insta">
                        <a href="https://www.instagram.com/" target="_blank" class="insta-link">
                            <img class="img-circle img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/insta4.jpg" alt="">
                            <h4>Настя
                                <small>г. Ковель</small>
                            </h4>
                        </a>
                        <blockquote><p>"Продала свой старый и купила новой телефон. Очень удобно!"</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-4 insta">
                    <h2 class="text-center">Больше отзывов в нашем Instagram аккаунте</h2>
                </div>
                <div class="col-md-4 insta">
                    <div class="hidden-xs" style="margin-top:37px;"></div>
                    <a href="https://www.instagram.com/_daddy_apple_" target="_blank">
                        <i class="fa fa-instagram fa_instagram fa-5x"></i>
                    </a>
                </div>

                <div class="col-md-4 insta">
                    <div class="hidden-xs" style="margin-top:60px;"></div>
                    <a href="https://www.instagram.com/_daddy_apple_" target="_blank" class="insta-link">instagram.com/daddy_apple</a>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Advantages Section -->
<section id="" class="section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 heading">
                <h2>Преимущества нашей компании</h2>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <img class="img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/file.jpg">
            </div>
            <div class="col-md-offset-2 col-md-8">
                <div class="container-fluid">
                    <div class="about-us">
                        <div class="row">
                            <div class="col-sm-6 about-us-item">
                                <p><i class="fa fa-cogs fa-3x"></i></p>
                                <h4><strong>Мы знаем <br/>технику изнутри</strong></h4>
                                <p>Каждый телефон проверяеться на наличие измененний внутри</p>
                            </div>
                            <div class="col-sm-6 about-us-item">
                                <p><i class="fa fa-usd fa-3x"></i></p>
                                <h4><strong>Самые выгодные предложения - у нас</strong></h4>
                                <p>Цены на телефоны существенно ниже,чем у конкурентов</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-6 about-us-item">
                                <p><i class="fa fa-heart-o fa-3x"></i></p>
                                <h4><strong>Делаем как для себя</strong></h4>
                                <p>Подбираем смартфоны только с минимальными следами использования</p>
                            </div>
                            <div class="col-sm-6 about-us-item">
                                <p><i class="fa fa-shield fa-3x"></i></p>
                                <h4><strong>Мы не дадим вашим яблокам пропасть</strong></h4>
                                <p>Услуга Trade-In. Честная оценка ваших устройств</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Questions Section -->
<section id="question" class="section grey-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 heading">
                <h2> Часто задаваемые вопросы клиентов </h2>
            </div>
        </div>
        <div class="row">
            <div class="panel-group text-left" id="accordion">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Ваши Айфоны работают со
                                всеми украинскими операторами?</a>
                        </h4>
                    </div>
                    <div id="collapse1" class="panel-collapse collapse in">
                        <div class="panel-body">Да,мы продаем только Never Lock телефоны. Это означает, что телефон от
                            Apple будет работать со
                            всеми карточками мобильной связи Украины, да и всего мира. То есть, Iphone не заблокирован,
                            работает сразу же после покупки. Просто вставляете карточку и пользуетесь.
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Со сканером отпечатка
                                пальца все нормально? Он работает?</a>
                        </h4>
                    </div>
                    <div id="collapse2" class="panel-collapse collapse">
                        <div class="panel-body">Все телефоны,которые есть у нас в наличии поставляються с рабочими
                            cистемами идентификации Touch
                            ID.Эта система основана на сканере отпечатков пальцев и позволяет надежно защищать личные
                            данные. На текущий момент данную функцию поддерживают iPhone 5s, iPhone 6, iPhone 6 Plus,
                            iPhone
                            6s, iPhone 6s Plus, iPhone 7, iPhone Plus.
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Вы продаете только
                                бывшие в употреблении Айфоны?</a>
                        </h4>
                    </div>
                    <div id="collapse3" class="panel-collapse collapse">
                        <div class="panel-body">Большую часть нашого ассортимента составляет б.у.техника Apple,но вы
                            можете сделать предзаказ на
                            новый телефон по доступной цене.
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse4">Сколько лет существует
                                компания?</a>
                        </h4>
                    </div>
                    <div id="collapse4" class="panel-collapse collapse">
                        <div class="panel-body">Наша компания работает на рынке услуг уже 20 лет. Мы работаем с
                            клиентами из России и бывших стран СНГ. Самым важным для нас всегда будет добиться
                            результата,
                            который хочет
                            получить наш клиент, сотрудничая с нашей компанией.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xs-12">
                <div class="div-grey ">
                    <div class="col-lg-2"><i class="fa fa-question-circle-o fa-3x"></i></div>
                    <div class="col-lg-10"><h4>Ваши Айфоны работают со всеми украинскими операторами?</h4></div>
                    <p>Да,мы продаем только Never Lock телефоны. Это означает, что телефон от Apple будет работать со
                        всеми карточками мобильной связи Украины, да и всего мира. То есть, Iphone не заблокирован,
                        работает сразу же после покупки. Просто вставляете карточку и пользуетесь.</p>
                    <br><br>
                </div>
            </div>
            <div class="col-md-6 col-xs-12">
                <div class="div-grey ">
                    <div class="col-lg-2"><i class="fa fa-question-circle-o fa-3x"></i></div>
                    <div class="col-lg-10"><h4>Со сканером отпечатка пальца все нормально? Он работает?</h4></div>
                    <p>Все телефоны,которые есть у нас в наличии поставляються с рабочими cистемами идентификации Touch
                        ID.Эта система основана на сканере отпечатков пальцев и позволяет надежно защищать личные
                        данные. На текущий момент данную функцию поддерживают iPhone 5s, iPhone 6, iPhone 6 Plus, iPhone
                        6s, iPhone 6s Plus, iPhone 7, iPhone Plus.</p>

                </div>
            </div>

            <br><br><br><br><br>
        </div>
        <div class="row">
            <div class="col-md-6 col-xs-12">
                <div class="div-grey ">
                    <div class="col-lg-2"><i class="fa fa-question-circle-o fa-3x"></i></div>
                    <div class="col-lg-10"><h4>Вы продаете только бывшие в употреблении Айфоны?</h4></div>
                    <p>Большую часть нашого ассортимента составляет б.у.техника Apple,но вы можете сделать предзаказ на
                        новый телефон по доступной цене.</p>
                    <br><br>
                </div>
            </div>
            <div class="col-md-6 col-xs-12">
                <div class="div-grey ">
                    <div class="col-lg-2"><i class="fa fa-question-circle-o fa-3x"></i></div>
                    <div class="col-lg-10"><h4>Сколько лет существует компания?</h4></div>
                    <p>Наша компания работает на рынке услуг уже 20 лет. Мы работаем с
                        клиентами из России и бывших стран СНГ. Самым важным для нас всегда будет добиться результата,
                        который хочет
                        получить наш клиент, сотрудничая с нашей компанией. </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Gifts Section -->
<section id="gift" class="section gift">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="col-sm-5 col-xs-12">
                    <div class="text-center">
                        <br><br>
                        <h2>Оставьте заявку сейчас и получите </h2>
                        <h2 class="text-info">Бесплатную курьерскую доставку на дом! </h2>
                        <br/>
                        <a href="#buy" class="btn btn-custom-1 scroll_btn">Оставить заявку</a>
                    </div>
                </div>
                <div class="col-sm-6 col-xs-12">
                    <div class="text-center">
                        <img class="img-responsive img-center" src="<?= get_template_directory_uri() ?>/assets/img/iphones.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Callback Section -->
<section id="callback" class="section grey-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="col-lg-6">
                    <h2>Остались вопросы?</h2>
                </div>
                <div class="col-lg-6">
                    <br>
                    <a href="#" data-toggle="modal" data-target="#callModal" class="btn btn-lg btn-custom-3">ПЕРЕЗВОНИТЬ</a>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="section" style=" margin: 0 0 70px">
    <div class="col-lg-12">
        <h2 class="text-info" style="font-style: italic">Доверьтесь профессионалам - не дайте себя обмануть!</h2>
    </div>
</section>

<!-- Footer Section -->
<footer class="footer">
    <div class="footer-top grey-section">
        <div class="container">
            <div class="row">
                <div class="footer-col col-md-6">
                    <h4>Контакты:</h4>
                    <a type="phone"> +38 095 555 55 55</a><br/>
                    <a type="phone"> +38 095 555 55 55</a><br/>
                    <a href="mailto:mail@gmail.com">mail@daddyapple.com</a>
                </div>
                <div class="footer-col col-md-6">
                    <h4>График работы:</h4>
                    <p>Call-center: <b>с 10:00 до 20:00</b></p>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="col-md-12">
                <div class="row">
                    <p>© 2013 - 2017 Daddy Apple. Все права защищены.</p>
                    <a href="politics/" target="_blank">Политика конфиденциальности</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Modal window order-->
<div class="modal fade" id="squarespaceModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">×</span>
                </button>
                <p id="model_name"></p>
            </div>
            <div class="modal-body">
                <!-- content goes here -->

                <form id="modalForm" action="form-ok.php" method="post">
                    <div class="form-group">
                        <input type="hidden" value="" name="model" id="model">
                        <label class="control-label" for="name">Имя</label>
                        <input type="text" class="form-control" name="name" data-minlength="3"
                               data-error="Введите имя" placeholder="Ваше имя" required>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="phone">Телефон</label>
                        <input type="tel" class="form-control" id="phone2" name="phone" placeholder="Ваш телефон"
                               data-error="Введите телефон" required>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="device-color">
                        <h5>Вибрать цвет</h5>
                        <div class="btn-group" data-toggle="buttons">
                            <label class="btn silver radio-btn-1 radius-right-left">
                                <input type="radio" name="color" autocomplete="off" value="silver" required>
                                <span class="fa check fa-check-circle-o"></span><span class="tip"> SILVER</span>
                            </label>

                            <label class="btn gold radio-btn-1 radius-right-left">
                                <input type="radio" name="color" autocomplete="off" value="gold" required>
                                <span class="fa check fa-check-circle-o"></span><span class="tip"> GOLD</span>
                            </label>

                            <label class="btn space radio-btn-1 radius-right-left">
                                <input type="radio" name="color" autocomplete="off" value="space" required>
                                <span class="fa check fa-check-circle-o"></span><span class="tip"> GRAY</span>
                            </label>

                            <label class="btn rose radio-btn-1 radius-right-left">
                                <input type="radio" name="color" autocomplete="off" value="rose" required>
                                <span class="fa check fa-check-circle-o"></span><span class="tip"> ROSE</span>
                            </label>

                            <label class="btn black radio-btn-1 radius-right-left">
                                <input type="radio" name="color" autocomplete="off" value="black" required>
                                <span class="fa check fa-check-circle-o"></span><span class="tip"> BLACK</span>
                            </label>
                        </div>
                    </div>
                    <br>
                    <div class="memory">
                        <h5>Выберите память</h5>
                        <div class="btn-group" data-toggle="buttons">
                            <label class="btn 16gb btn-default radio-btn-2 radius-right-left">
                                <input type="radio" name="memory" autocomplete="off" value="16GB" required>
                                <span class="fa check fa-check-circle-o"></span><span class="tip"> 16GB</span>
                            </label>

                            <label class="btn 23gb btn-default radio-btn-2 radius-right-left">
                                <input type="radio" name="memory" autocomplete="off" value="32GB" required>
                                <span class="fa check fa-check-circle-o"></span><span class="tip"> 32GB</span>
                            </label>

                            <label class="btn 64gb btn-default radio-btn-2 radius-right-left">
                                <input type="radio" name="memory" autocomplete="off" value="64GB" required>
                                <span class="fa check fa-check-circle-o"></span><span class="tip"> 64GB</span>
                            </label>

                            <label class="btn 128gb btn-default radio-btn-2 radius-right-left">
                                <input type="radio" name="memory" autocomplete="off" value="128GB" required>
                                <span class="fa check fa-check-circle-o"></span><span class="tip"> 128GB</span>
                            </label>

                            <label class="btn 256gb btn-default radio-btn-2 radius-right-left">
                                <input type="radio" name="memory" autocomplete="off" value="256GB" required>
                                <span class="fa check fa-check-circle-o"></span><span class="tip"> 256GB</span>
                            </label>
                        </div>
                    </div>
                    <br><br>
                    <div class="text-center">
                        <button type="submit" class="btn btn-custom-1 ">Узнать цену</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>

<!-- Modal window call-->
<div class="modal fade" id="callModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                    <span aria-hidden="true">×</span>
                </button>
                <h4>Мы Вам перезвоним сейчас</h4>
            </div>
            <div class="modal-body">
                <form id="callForm" action="" method="post">
                    <div class="form-group">
                        <input type="hidden" value="" name="model" id="model">
                        <label class="control-label" for="name">Имя</label>
                        <input type="text" class="form-control" name="name" data-minlength="3"
                               data-error="Введите имя" placeholder="Ваше имя" required>
                        <div class="help-block with-errors"></div>
                    </div>
                    <div class="form-group">
                        <label for="phone">Телефон</label>
                        <input type="tel" class="form-control" id="phone2" name="phone" placeholder="Ваш телефон"
                               data-error="Введите телефон" required>
                        <div class="help-block with-errors"></div>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-custom-1 ">Узнать цену</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</div>

<?php get_footer(); ?>