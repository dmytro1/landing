<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 11/6/17
 * Time: 22:50
 */
?>
<?php $socials = Builder::get_footer_socials(); ?>
<footer class="row">
    <div class="container">
        <div class="row m0 social-links">
            <ul class="nav">
				<?php foreach ( $socials as $social ) : ?>
                    <li class="wow fadeInUp"><a href="<?= $social['link'] ?>"><i class="fa <?= $social['icon'] ?>"></i></a></li>
				<?php endforeach; ?>
                <li class="wow fadeInUp"><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li class="wow fadeInUp"><a href="#"><i class="fa fa-linkedin"></i></a></li>
                <li class="wow fadeInUp"><a href="#"><i class="fa fa-youtube"></i></a></li>
                <li class="wow fadeInUp"><a href="#"><i class="fa fa-google-plus"></i></a></li>
                <li class="wow fadeInUp"><a href="#"><i class="fa fa-pinterest"></i></a></li>
            </ul>
        </div>
        <div class="row m0 menu-rights">
			<?= Theme::footer_nav(); ?>
            <p><?= Builder::get_footer_copyright(); ?></p>
        </div>
    </div>
</footer>

<?php get_template_part( 'parts/modal' ); ?>

<?php wp_footer(); ?>
</body>
</html>