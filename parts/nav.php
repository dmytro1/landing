<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 11/6/17
 * Time: 00:23
 */
?>
<!-- Navigation -->
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sandwich">
						<span class="sw-topper"></span>
						<span class="sw-bottom"></span>
						<span class="sw-footer"></span>
					</span>
            </button>
            <a class="navbar-brand" href=""><img src="<?= Theme::get_logo_url() ?>" class="logo img_resp" alt=""></a>
        </div>
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <?php echo Theme::top_nav(); ?>
        </div>
    </div>
</nav>