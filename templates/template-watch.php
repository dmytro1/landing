<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 11/9/17
 * Time: 16:56
 */
/*
 * Template Name: Watch
 */

?>

<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>ProLand - Product Landing Page Template</title>

	<script src="/cdn-cgi/apps/head/Oy59uNyS-HS5eBg_KJoiEjW-Xo8.js"></script><link href='https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700' rel='stylesheet' type='text/css'>

	<link href="<?= get_template_directory_uri() ?>/assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="css/plugins/font-awesome.min.css" rel="stylesheet">
	<link href="css/plugins/lineicons.css" rel="stylesheet">
	<link href="vendors/magnific-popup/magnific-popup.css" rel="stylesheet">
	<link href="vendors/bootstrap-touchspin/jquery.bootstrap-touchspin.min.css" rel="stylesheet">
	<link href="vendors/bootstrap-select/css/bootstrap-select.min.css" rel="stylesheet">
	<link href="vendors/owl-carousel/assets/owl.carousel.css" rel="stylesheet">
	<link href="css/plugins/animate.css" rel="stylesheet">

	<link href="css/plugins/preloader.css" rel="stylesheet">

	<link href="<?= get_template_directory_uri() ?>/assets/css/style-watch.css" rel="stylesheet">

	<link href="css/themes/blue-orange.css" rel="stylesheet">

	<!--[if lt IE 9]>
	<script src="js/lib/html5shiv.min.js"></script>
	<script src="js/lib/respond.min.js"></script>
	<![endif]-->
</head>
<body class="home" data-scroll-animation="true">

<div id="loading">
	<div id="loading-center">
		<div id="loading-center-absolute">
			<div class="object" id="object_four"></div>
			<div class="object" id="object_three"></div>
			<div class="object" id="object_two"></div>
			<div class="object" id="object_one"></div>
		</div>
	</div>
</div>

<header class="row" id="header">
	<nav class="navbar navbar-default navbar-fixed-top">
		<div class="container">

			<div class="navbar-header">
				<a class="navbar-brand" href="#header"><img src="images/logo.png" alt=""></a>
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
			</div>

			<div class="collapse navbar-collapse" id="main-navbar">
				<a href="#product-choose" class=" btn btn-warning pull-right hidden-sm hidden-xs">BUY IT NOW</a>
				<ul class="nav navbar-nav navbar-right">
					<li><a href="#product">Product</a></li>
					<li><a href="#features">Features</a></li>
					<li><a href="#reviews">Reviews</a></li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Pages <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a href="index.html">Pre-order (Email)</a></li>
							<li><a href="index_email.html">Email Signup (Mailchimp)</a></li>
							<li><a href="index_buy_paypal.html">Buy Now (PayPal)</a></li>
							<li><a href="index_kickstarter.html">Kickstarter Campaign</a></li>
							<li><a href="index_indegogo.html">Indegogo Campaign</a></li>
							<li><a href="index_boxed.html">Boxed Version</a></li>
							<li><a href="index_rtl.html">RTL Version</a></li>
							<li><a href="index_video.html">Video Background</a></li>
							<li class="divider"></li>
							<li><a href="blog.html">Blog</a></li>
							<li><a href="blog-single.html">Blog Single</a></li>
							<li><a href="about.html">About Us</a></li>
							<li><a href="faq.html">FAQ</a></li>
							<li><a href="shortcodes.html">Shortcodes</a></li>
						</ul>
					</li>
					<li><a href="#contact">contact</a></li>
				</ul>
			</div>

		</div>

	</nav>
	<div class="top-banner row m0 text-center fadeInOnLoad">
		<div class="container">
			<h2>The future of tech is here</h2>
			<p>Holisticly incentivize revolutionary collaboration and idea sharing before cost effective users. Actual focused services before highly efficient human capital. </p>
			<a href="#product-choose" class="btn btn-primary btn-lg">BUY WITH PAYPAL</a>
			<div class="row apple-watch">
				<img src="images/apple-watch.png" alt="" class="watch_img">
			</div>
		</div>
	</div>
</header>

<section class="row the-product" id="product">
	<div class="container">
		<div class="row section-header wow fadeInUp">
			<h2>the product</h2>
			<p>Introduce the product here. A small description about what it is and how it helps the user. You can also add some photos below.</p>
		</div>
		<div class="row apple-watch-note-feature text-center">
			<img src="images/apple-watch-2.png" alt="">

			<div class="feature-note right top wow fadeInRight">
				<div class="indicator">
					<div class="plus-icon">
						<span class="plus">+</span>
					</div>
				</div>
				<div class="feature-name">
					metalic strap
				</div>
			</div>

			<div class="feature-note left top wow fadeInLeft">
				<div class="indicator">
					<div class="plus-icon">
						<span class="plus">+</span>
					</div>
				</div>
				<div class="feature-name">
					Gps tracker
				</div>
			</div>

			<div class="feature-note right bottom wow fadeInUp">
				<div class="indicator">
					<div class="plus-icon">
						<span class="plus">+</span>
					</div>
				</div>
				<div class="feature-name">
					Bluetooth 4.2
				</div>
			</div>

			<div class="feature-note left bottom wow fadeInLeft">
				<div class="indicator">
					<div class="plus-icon">
						<span class="plus">+</span>
					</div>
				</div>
				<div class="feature-name">
					water resistant
				</div>
			</div>
		</div>
	</div>
</section>

<section class="row how-it-works">
	<div class="container">
		<div class="row section-header v2 wow fadeInUp">
			<h2>how it works</h2>
			<p>Everybody loves tech gadgets, But our’s is different. Here is how it works. Its should be simple. Add how easy is to install your product</p>
		</div>
		<div class="row work-processes">

			<div class="col-sm-4 work-process wow fadeIn">
				<div class="row m0 process-icon">
					<img src="images/desktop.png" alt="">
				</div>
				<h3>Connect Device</h3>
				<p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
			</div>

			<div class="col-sm-4 work-process wow fadeIn" data-wow-delay="0.5s">
				<div class="row m0 process-icon">
					<img src="images/toggles.png" alt="">
				</div>
				<h3>Configure it</h3>
				<p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
			</div>

			<div class="col-sm-4 work-process wow fadeIn" data-wow-delay="1s">
				<div class="row m0 process-icon">
					<img src="images/trophy.png" alt="">
				</div>
				<h3>Yay! Done.</h3>
				<p>Lorem ipsum dolor sit amet, consectetur de elit, sed do tempor incididunt ut labore eta rehenderit in voluptate velit.</p>
			</div>
		</div>
	</div>
</section>

<section class="row the-benefits" id="features">
	<div class="container">
		<div class="row section-header wow fadeInUp">
			<h2>The Benefits</h2>
			<p>List out your product’s benefit here. A small description about what it is and how it helps the user. You can also add some icons.</p>
		</div>
		<div class="row benefit-notes">

			<div class="col-sm-6 col-md-4 benefit wow fadeInUp">
				<div class="media">
					<div class="media-left">
						<span><i class="li_location"></i></span>
					</div>
					<div class="media-body">
						<h4>GPS Tracking</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-4 benefit wow fadeInUp" data-wow-delay="0.3s">
				<div class="media">
					<div class="media-left">
						<span><i class="li_heart"></i></span>
					</div>
					<div class="media-body">
						<h4>Heartbeat Analysis</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-4 benefit wow fadeInUp" data-wow-delay="0.6s">
				<div class="media">
					<div class="media-left">
						<span><i class="li_lock"></i></span>
					</div>
					<div class="media-body">
						<h4>Security first</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-4 benefit wow fadeInUp" data-wow-delay="0.9s">
				<div class="media">
					<div class="media-left">
						<span><i class="li_bulb"></i></span>
					</div>
					<div class="media-body">
						<h4>Innovative idea</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-4 benefit wow fadeInUp" data-wow-delay="1.2s">
				<div class="media">
					<div class="media-left">
						<span><i class="li_banknote"></i></span>
					</div>
					<div class="media-body">
						<h4>Save your bills</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
			</div>

			<div class="col-sm-6 col-md-4 benefit wow fadeInUp" data-wow-delay="1.5s">
				<div class="media">
					<div class="media-left">
						<span><i class="li_lab"></i></span>
					</div>
					<div class="media-body">
						<h4>Proven technology</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="row left-right-contents">
	<div class="container">
		<div class="row ">
			<div class="col-sm-12 col-md-4 col-md-push-4 text-center wow fadeIn">
				<img src="images/apple-watch-3.png" alt="">
			</div>
			<div class="col-md-4 col-sm-6 col-md-pull-4 left-content">
				<div class="media wow fadeInUp">
					<div class="media-left">
						<span><i class="li_key"></i></span>
					</div>
					<div class="media-body">
						<h4>Fast and secure</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
				<div class="media wow fadeInUp" data-wow-delay="0.3s">
					<div class="media-left">
						<span><i class="li_megaphone"></i></span>
					</div>
					<div class="media-body">
						<h4>Voice Assistant</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
				<div class="media wow fadeInUp" data-wow-delay="0.6s">
					<div class="media-left">
						<span><i class="li_diamond"></i></span>
					</div>
					<div class="media-body">
						<h4>Apps you love</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
			</div>
			<div class="col-md-4 col-sm-6 right-content">
				<div class="media wow fadeInUp">
					<div class="media-left">
						<span><i class="li_like"></i></span>
					</div>
					<div class="media-body">
						<h4>Stay in touch</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
				<div class="media wow fadeInUp" data-wow-delay="0.3s">
					<div class="media-left">
						<span><i class="li_user"></i></span>
					</div>
					<div class="media-body">
						<h4>Designed for you</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
				<div class="media wow fadeInUp" data-wow-delay="0.6s">
					<div class="media-left">
						<span><i class="li_clock"></i></span>
					</div>
					<div class="media-body">
						<h4>Precise timepiece</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="row our-collection">
	<div class="container">
		<div class="row section-header wow fadeInUp">
			<h2>Our Collection</h2>
			<p>You are unique. You have unique style and you need a unique watch for you. Choose from our collection of watches.</p>
		</div>
		<div class="row collections">

			<div class="col-sm-6 col-md-3 item wow fadeIn">
				<div class="row m0 featured-img">
					<img src="images/collection-1.jpg" alt="">
				</div>
				<h4 class="title">Watch Limited Edition</h4>
				<h5 class="category">Stainless steel case</h5>
				<h4 class="price">$399</h4>
				<a href="#product-choose" class="btn">CHOOSE</a>
			</div>

			<div class="col-sm-6 col-md-3 item wow fadeIn" data-wow-delay="0.5s">
				<div class="row m0 featured-img">
					<img src="images/collection-2.jpg" alt="">
				</div>
				<h4 class="title">Watch Bracelet</h4>
				<h5 class="category">White strap &amp; Stainless steel</h5>
				<h4 class="price">$299</h4>
				<a href="#product-choose" class="btn">CHOOSE</a>
			</div>

			<div class="col-sm-6 col-md-3 item wow fadeIn" data-wow-delay="1s">
				<div class="row m0 featured-img">
					<img src="images/collection-3.jpg" alt="">
				</div>
				<h4 class="title">Watch Original</h4>
				<h5 class="category">The FirstWatch ever released</h5>
				<h4 class="price">$249</h4>
				<a href="#product-choose" class="btn">CHOOSE</a>
			</div>

			<div class="col-sm-6 col-md-3 item wow fadeIn" data-wow-delay="1.5s">
				<div class="row m0 featured-img">
					<img src="images/collection-4.jpg" alt="">
				</div>
				<h4 class="title">Watch Soprts Edition</h4>
				<h5 class="category">Water proof and Fitness tracking</h5>
				<h4 class="price">$399</h4>
				<a href="#product-choose" class="btn">CHOOSE</a>
			</div>
		</div>
	</div>
</section>

<section class="row the-watch">
	<div class="container">
		<div class="row">
			<div class="col-md-5 col-md-offset-1 text-center the-watch-img wow zoomIn">
				<img src="images/the-watch.png" alt="" class="img-responsive">
			</div>
			<div class="col-md-6 the-watch-features">
				<div class="row section-header v3 wow fadeIn">
					<h2>The Watch</h2>
					<p>With an image in the side of this conetent, you can use this section to write about some cool thing about your product or its features.</p>
				</div>
				<ul class="nav">
					<li class="wow fadeIn" data-wow-delay="0.2s">Compatible with all devices</li>
					<li class="wow fadeIn" data-wow-delay="0.4s">Android and iOS Support</li>
					<li class="wow fadeIn" data-wow-delay="0.6s">Activity &amp; Health Tracker</li>
					<li class="wow fadeIn" data-wow-delay="0.8s">Read &amp; reply to messages</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<section class="row split-columns">
	<div class="row m0 split-column wow fadeIn">
		<div class="col-sm-6 image text-right">
			<img src="images/split-1.jpg" alt="">
		</div>
		<div class="col-sm-6 texts">
			<div class="texts-inner row m0">
				<h2>Every Apps you wanted</h2>
				<p>You won’t just send and receive messages, calls, and mail more easily and efficiently. You’ll express yourself in unique, fun, and more personal ways. Communicating with Watch is discreet, sophisticated, and nuanced. a whole new way to connect with others.</p>
			</div>
		</div>
	</div>
	<div class="row m0 split-column wow fadeIn">
		<div class="col-sm-6 col-sm-push-6 image">
			<img src="images/split-2.jpg" alt="">
		</div>
		<div class="col-sm-6 col-sm-pull-6 texts">
			<div class="texts-inner row m0">
				<h2>Health and Fitness</h2>
				<p>Fitness isn’t just about running, biking, or hitting the gym. It’s also about being active throughout the day. Watch measures all the ways you move, such as walking the dog, taking the stairs, or playing with your kids. It even keeps track of when you stand up.</p>
			</div>
		</div>
	</div>
</section>

<section class="row reviews" id="reviews">
	<div class="container">
		<div class="row section-header wow fadeInUp">
			<h2>Reviews</h2>
			<p>Don’t take our word,. See what our experts says about the watch. We have got over 1000s of positive reviews.</p>
		</div>
		<div class="row">

			<div class="review col-sm-4 wow fadeIn">
				<img src="images/quote.png" alt="" class="review-sign">
				<p>The Watch is the nicest smartwatch available, but it's more status symbol than wearable revolutionary. Most of the Watch's features are great.</p>
				<img src="images/reviewer1.png" alt="" class="reviewer">
			</div>

			<div class="review col-sm-4 wow fadeIn" data-wow-delay="0.3s">
				<img src="images/quote.png" alt="" class="review-sign">
				<p>Watch is the most ambitious, well constructed smartwatch ever seen, but first-gen shortfalls make it feel more like a fashionable toy than a necessary tool.</p>
				<img src="images/reviewer2.png" alt="" class="reviewer">
			</div>

			<div class="review col-sm-4 wow fadeIn" data-wow-delay="0.6s">
				<img src="images/quote.png" alt="" class="review-sign">
				<p>Watch is the best smartwatch we’ve used, and the first that feels friendly and has character. Watch OS 2.0 adds needed app and Siri abilities.</p>
				<img src="images/reviewer3.png" alt="" class="reviewer">
			</div>
		</div>
	</div>
</section>

<section class="row  featured-on">
	<div class="container">
		<div class="row">
			<h3>As featured on</h3>
			<ul class="nav nav-justified">
				<li class="wow fadeInUp" data-wow-delay="0.2s"><img src="images/featured1.png" alt=""></li>
				<li class="wow fadeInUp" data-wow-delay="0.4s"><img src="images/featured2.png" alt=""></li>
				<li class="wow fadeInUp" data-wow-delay="0.6s"><img src="images/featured3.png" alt=""></li>
				<li class="wow fadeInUp" data-wow-delay="0.8s"><img src="images/featured4.png" alt=""></li>
				<li class="wow fadeInUp" data-wow-delay="1s"><img src="images/featured5.png" alt=""></li>
				<li class="wow fadeInUp" data-wow-delay="1.2s"><img src="images/featured6.png" alt=""></li>
			</ul>
		</div>
	</div>
</section>

<section class="row faqs">
	<div class="container">
		<div class="row section-header wow fadeInUp">
			<h2>faq</h2>
			<p>Got questions? We’ve got answers. If you have some other questions, feel free to send us an email to <a href="#"><span class="__cf_email__" data-cfemail="ec8489808083ac9c9e8388998f98c28f8381">[email&#160;protected]</span></a></p>
		</div>
		<div class="row">

			<div class="col-sm-6 faq wow fadeInUp">
				<h4>What is Watch? How it works?</h4>
				<p>Watch took center stage at this year's Product Show with a preview of watch OS 2. The next generation of Watch software is packed with features that just might turn the device from a nice-to-have into a must-have. If you already own an Apple Watch, you'll have to live with the old software until fall. You’ll love it at the first use.</p>
			</div>

			<div class="col-sm-6 faq wow fadeInUp">
				<h4>How the watch is made?</h4>
				<p>Watch has an anodized aluminum case (which is lighter than stainless steel) in silver or space gray, and the face is Ion-X glass, which also designed to be hard and rugged (as well as a little bit lighter) than the sapphire. It’s definitely the lightest of the three Apple Watch editions, making it an ideal exercise companion. </p>
			</div>

			<div class="col-sm-6 faq wow fadeInUp" data-wow-delay="0.3s">
				<h4>Can I swap out the watch band?</h4>
				<p>Absolutely. Watch comes with six bands that are easy to mix and match any band with any watch. You can swap them out as your heart desires without the aid of any tools—as long as the band and watch are the same size. (The Leather Loop band, for example, only fits 42mm watches, not the smaller 38mm size.) </p>
			</div>

			<div class="col-sm-6 faq wow fadeInUp" data-wow-delay="0.3s">
				<h4>So it’s a watch and a fitness tracker?</h4>
				<p>The accelerometer lets the watch count your steps, and it extrapolate distance on its own, or rely on the GPS in the paired Phone to trace your exact route. That step data comes in handy for two of the apps included on the watch: Activity and Workout. Both of the watch’s fitness apps sync data back to the Health and Fitness apps on your Phone.</p>
			</div>
		</div>
	</div>
</section>

<section class="row tech-specs">
	<div class="container">
		<div class="row section-header wow fadeInUp">
			<h2>tech specs</h2>
			<p>Need more info? Please have a look at the tech specs of the watch. We’ve used Latest technology &amp; quality materials</p>
		</div>

		<div class="row tech-specs-row">
			<div class="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="0s">
				<h4>Compatibility</h4>
				<ul class="nav">
					<li>iPhone iOS 7 &amp; up</li>
					<li>Android 4.3 &amp; uptexts</li>
					<li>Bluetooth 4.0</li>
					<li>Notification for calls / texts</li>
				</ul>
			</div>
			<div class="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="0.3s">
				<h4>App</h4>
				<ul class="nav">
					<li>Set daily goals</li>
					<li>Analyze history</li>
					<li>Sync to phone &amp; cloud</li>
					<li>Connect to Apple health kit</li>
					<li>Connect to Google fit</li>
					<li>Watch firmware upgrade</li>
				</ul>
			</div>
			<div class="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="0.6s">
				<h4>Vibration silent alarms</h4>
				<ul class="nav">
					<li>Phone notifications</li>
					<li>Daily goal reached</li>
					<li>Daily wake-up alarm</li>
					<li>Location assistance</li>
					<li>Accessiblity features</li>
				</ul>
			</div>
			<div class="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="0.9s">
				<h4>Watch</h4>
				<ul class="nav">
					<li>12.6mm thickness</li>
					<li>3.16L stainless steel case</li>
					<li>40mm diameter</li>
					<li>5 ATM water resistant</li>
					<li>Sapphire glass crystal</li>
				</ul>
			</div>
			<div class="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="1.2s">
				<h4>Straps</h4>
				<ul class="nav">
					<li>Italian leather with natural lining</li>
					<li>Comfort sport fabric</li>
					<li>Quick-release pins</li>
				</ul>
			</div>
			<div class="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="1.5s">
				<h4>Activity tracking</h4>
				<ul class="nav">
					<li>Step counting</li>
					<li>Distance</li>
					<li>Calories burned</li>
					<li>Swimming (strokes)</li>
				</ul>
			</div>
			<div class="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="1.8s">
				<h4>Timekeeping</h4>
				<ul class="nav">
					<li>Swiss ETA movement</li>
					<li>Accurate, reliable</li>
				</ul>
			</div>
			<div class="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="2.1s">
				<h4>Battery power</h4>
				<ul class="nav">
					<li>Standard CR2025 6+ months</li>
					<li>Standard 364 for timekeeping 5+ years</li>
					<li>Solar Power available as aupgrade</li>
				</ul>
			</div>
			<div class="col-sm-6 col-md-4 tech-spec wow fadeIn" data-wow-delay="2.4s">
				<h4>Sensors</h4>
				<ul class="nav">
					<li>MEMS 3-axis accelerometer</li>
					<li>Highly accurate</li>
					<li>Low power consumption</li>
				</ul>
			</div>
		</div>

		<div class="row tech-specs-row">
		</div>

		<div class="row tech-specs-row">
		</div>
	</div>
</section>

<section class="row team">
	<div class="container">
		<div class="row section-header wow fadeInUp">
			<h2>meet the team</h2>
			<p>We are a small group of inverntors, hackers and designers from the differrent parts of the world on a mission.</p>
		</div>
		<div class="row team_members">

			<div class="col-md-3 col-sm-6 member wow fadeInUp">
				<div class="row m0 inner">
					<div class="row m0 image">
						<img src="images/team-1.jpg" alt="">
					</div>
					<div class="texts row m0">
						<h4>Gary Elliott</h4>
						<h5>Co-Founder and CEO</h5>
					</div>
				</div>
			</div>

			<div class="col-md-3 col-sm-6 member wow fadeInUp" data-wow-delay="0.3s">
				<div class="row m0 inner">
					<div class="row m0 image">
						<img src="images/team-2.jpg" alt="">
					</div>
					<div class="texts row m0">
						<h4>Jeffrey Allen</h4>
						<h5>Co-Founder and CTO</h5>
					</div>
				</div>
			</div>

			<div class="col-md-3 col-sm-6 member wow fadeInUp" data-wow-delay="0.6s">
				<div class="row m0 inner">
					<div class="row m0 image">
						<img src="images/team-3.jpg" alt="">
					</div>
					<div class="texts row m0">
						<h4>Sara Mendez</h4>
						<h5>Lead Developer, Hacker</h5>
					</div>
				</div>
			</div>

			<div class="col-md-3 col-sm-6 member wow fadeInUp" data-wow-delay="0.9s">
				<div class="row m0 inner">
					<div class="row m0 image">
						<img src="images/team-4.jpg" alt="">
					</div>
					<div class="texts row m0">
						<h4>Albert Castro</h4>
						<h5>3D Designer &amp; Prototyper</h5>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="row timeline">
	<div class="container">
		<div class="row section-header wow fadeInUp">
			<h2>timeline</h2>
			<p>Here’s a roadmap of our product to highlight the milestones from the initial phase to delivery and future updates.</p>
		</div>
		<div class="row timeline-row">
			<div class="row m0 timeline-post">
				<div class="bar-content">
					<div class="inner">now</div>
				</div>
			</div>
			<div class="row m0 timeline-post has-content wow fadeInUp">
				<div class="col-sm-6 half-side date">
					23 jan 2014
				</div>
				<div class="col-sm-6 half-side content">
					<div class="inner">
						<h4 class="title">Mass Production</h4>
					</div>
				</div>
			</div>
			<div class="row m0 timeline-post has-content odd wow fadeInUp">
				<div class="col-sm-6 half-side date">
					23 jan 2014
				</div>
				<div class="col-sm-6 half-side content">
					<div class="inner">
						<h4 class="title">Testing Pre-Production Samples</h4>
					</div>
				</div>
			</div>
			<div class="row m0 timeline-post has-content wow fadeInUp">
				<div class="col-sm-6 half-side date">
					23 jan 2014
				</div>
				<div class="col-sm-6 half-side content">
					<div class="inner">
						<h4 class="title">Croudfunding Campaign</h4>
						<p>And an optional description. You may add little description of your milestone if you want.</p>
					</div>
				</div>
			</div>
			<div class="row m0 timeline-post has-content odd wow fadeInUp">
				<div class="col-sm-6 half-side date">
					23 jan 2014
				</div>
				<div class="col-sm-6 half-side content">
					<div class="inner">
						<h4 class="title">Preview at CES</h4>
					</div>
				</div>
			</div>
			<div class="row m0 timeline-post wow fadeInUp">
				<div class="bar-content">
					<div class="inner">2015</div>
				</div>
			</div>
			<div class="row m0 timeline-post has-content wow fadeInUp">
				<div class="col-sm-6 half-side date">
					23 jan 2014
				</div>
				<div class="col-sm-6 half-side content">
					<div class="inner">
						<h4 class="title">3D Prototype &amp; Testing</h4>
					</div>
				</div>
			</div>
			<div class="row m0 timeline-post has-content odd wow fadeInUp">
				<div class="col-sm-6 half-side date">
					23 jan 2014
				</div>
				<div class="col-sm-6 half-side content">
					<div class="inner">
						<h4 class="title">Research and Development</h4>
					</div>
				</div>
			</div>
			<div class="row m0 timeline-post">
				<div class="bar-content">
					<div class="inner">idea</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="row mobile-app">
	<div class="container">
		<div class="row">
			<div class="col-sm-6 col-sm-push-6 wow fadeIn">
				<h2>Mobile App for watch</h2>
				<p>The smartwatch connects to your iPhone and other iOS devices using Bluetooth, alerting you to incoming calls, emails, messages and alerts. Customize your with over 1,000 watchapps found within the smartwatch app.</p>
				<div class="row m0 downloads-btns">
					<a href="#" class="dload-link"><img src="images/app-store.png" alt=""></a>
					<a href="#" class="dload-link"><img src="images/google-play.png" alt=""></a>
				</div>
			</div>
			<div class="col-sm-6 col-sm-pull-6 wow fadeInUp">
				<img src="images/app-screen.png" alt="" class="mobile-img">
			</div>
		</div>
	</div>
</section>

<section class="row newsletter">
	<div class="container">
		<div class="row section-header wow fadeInUp">
			<h2>newsletter</h2>
			<p>Subscribe to our product newsletter to get notified when we launch the product or when we completed a milestone</p>
		</div>
		<form action="php/subscribe.php" id="subscribeform" class="row newsletter-form" method="post">
			<div class="input-group">
				<input type="email" class="form-control" name="email" placeholder="Enter Your Email Address">
				<span class="input-group-addon">
<button type="submit" id="js-subscribe-btn"><img src="images/right-angle-white.png" alt=""></button>
</span>
			</div>
			<div id="js-subscribe-result" class="text-center" data-success-msg="Almost finished. Please check your email and verify." data-error-msg="Oops. Something went wrong.">
				<p>
					<img src="images/protect.png" alt="">No Spam. We Promise. Unsubscribe anytime.
				</p>
			</div>
		</form>
	</div>
</section>

<section class="row contact" id="contact">


	<div id="mapBox" class="row m0" data-lat="37.3818288" data-lon="-122.0636325" data-zoom="15"></div>

	<div class="flip-box-container row m0">
		<div class="flip-box row m0 wow fadeIn">

			<div class="row contact-box flip-box-part">
				<h2>get in touch</h2>
				<ul class="nav">
					<li><i class="fa fa-map-marker"></i>523 Sylvan Ave, 5th Floor
						<br>Mountain View, CA 94041USA</li>
					<li><i class="fa fa-phone"></i>+1 (234) 56789
						<br>+1 987 654 3210</li>
					<li><i class="fa fa-envelope"></i><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="5e2d2b2e2e312c2a1e293f2a3d36323f303a703d3133">[email&#160;protected]</a></li>
				</ul>
				<button class="flip-contact-box btn btn-block">contact us</button>
			</div>

			<div class="row contact-form flip-box-part">
				<a href="javascript:void(0);" class="js-close-flip">&times;</a>

				<form action="php/contact.php" id="phpcontactform" method="POST">
					<div class="row">
						<div class="form-group col-sm-6">
							<input type="text" name="name" class="form-control" placeholder="Name" required>
						</div>
						<div class="form-group col-sm-6">
							<input type="email" name="email" class="form-control" placeholder="Email Address" required>
						</div>
					</div>
					<div class="form-group">
						<input type="text" name="subject" class="form-control" placeholder="Subject" required>
					</div>
					<div class="form-group">
						<textarea class="form-control" name="message" placeholder="Message" required></textarea>
					</div>
					<button type="submit" id="js-contact-btn" class="btn btn-block">Send Message</button>
					<div id="js-contact-result" data-success-msg="Form submitted successfully." data-error-msg="Oops. Something went wrong."></div>
				</form>

			</div>

		</div>
	</div>

</section>

<footer class="row">
	<div class="container">
		<div class="row m0 social-links">
			<ul class="nav">
				<li class="wow fadeInUp"><a href="#"><i class="fa fa-facebook"></i></a></li>
				<li class="wow fadeInUp" data-wow-delay="0.1s"><a href="#"><i class="fa fa-twitter"></i></a></li>
				<li class="wow fadeInUp" data-wow-delay="0.2s"><a href="#"><i class="fa fa-linkedin"></i></a></li>
				<li class="wow fadeInUp" data-wow-delay="0.3s"><a href="#"><i class="fa fa-youtube"></i></a></li>
				<li class="wow fadeInUp" data-wow-delay="0.4s"><a href="#"><i class="fa fa-google-plus"></i></a></li>
				<li class="wow fadeInUp" data-wow-delay="0.5s"><a href="#"><i class="fa fa-pinterest"></i></a></li>
			</ul>
		</div>
		<div class="row m0 menu-rights">
			<ul class="nav footer-menu">
				<li><a href="about.html">About</a></li>
				<li><a href="terms-of-use.html">Terms of Use</a></li>
				<li><a href="privacy-policy.html">Privacy Policy</a></li>
				<li><a href="#">Mobile App</a></li>
				<li><a href="presskit.zip">PressKit</a></li>
			</ul>
			<p>Copyright © 2016. Proland.
				<br class="small-divide"> All rights reserved</p>
		</div>
	</div>
</footer>

<div class="row product-box mfp-hide" id="product-choose">
	<button class="mfp-close custom_close" title="Close (Esc)" type="button">&#215;</button>
	<div class="product-img-gallery">
		<div id="product-imgs" class="carousel slide" data-ride="carousel">

			<ol class="carousel-indicators">
				<li data-target="#product-imgs" data-slide-to="0" class="active"></li>
				<li data-target="#product-imgs" data-slide-to="1"></li>
				<li data-target="#product-imgs" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner" role="listbox">
				<div class="item active">
					<img src="images/the-watch-1.png" alt="watch-1">
				</div>
				<div class="item">
					<img src="images/the-watch-2.png" alt="watch-2">
				</div>
				<div class="item">
					<img src="images/the-watch-3.png" alt="watch-3">
				</div>
			</div>
		</div>
	</div>
	<div class="product-desc">

		<form action="https://www.paypal.com/cgi-bin/webscr" method="POST" target="_top" class="choose-form row m0" id="paypal-regn">
			<div id="js-product-info" class="product-info">
				<h4 class="name">Smart Watch</h4>
				<h2 class="edition">Sports Edition</h2>
				<h5 class="model">MODEL AS1500</h5>
				<h2 class="price"><del>$349</del>$299 <span class="label label-default">early bird offer</span></h2>
				<div class="row m0 description">
					<p>8mm Silver Aluminum Case with Blue Sport Band. Its perfect fit for tracking fitness. 100% waterproof. Buy this limted edition sports edition.</p>
				</div>
				<div class="choose-options row m0" id="js-choose-color">
					<div class="option">
						<h4 class="form-label">Choose a color</h4>
						<div class="row m0 colors">
							<input type="radio" name="os0" value="Blue" id="color-1" checked>
							<label for="color-1"></label>
							<input type="radio" name="os0" value="Violet" id="color-2">
							<label for="color-2"></label>
							<input type="radio" name="os0" value="Magenta" id="color-3">
							<label for="color-3"></label>
							<input type="radio" name="os0" value="Yellow" id="color-4">
							<label for="color-4"></label>
							<input type="radio" name="os0" value="Green" id="color-5">
							<label for="color-5"></label>
						</div>
					</div>
					<div class="option">
						<h4 class="form-label">Qty</h4>
						<input type="text" value="1" name="quantity" class="quanity">
					</div>
					<div class="option">
						<h4 class="form-label">Size</h4>
						<select class="selectpicker" name="os1">
							<option value="M" selected>M</option>
							<option value="L">L</option>
							<option value="XL">XL</option>
						</select>
					</div>
				</div>
				<div class="submit-area row m0">
					<a href="javascript:void(0);" class="btn btn-rounded btn-block" id="next-personal">Checkout</a>
				</div>
			</div>

			<div class="personal-info" id="js-personal-info">
				<div class="form-group text-center"><a href="javascript:void(0);" class="btn" id="prev-product-info">Go Back</a></div>
				<div class="row">
					<div class="form-group col-sm-6">
						<input type="text" name="first_name" class="form-control" placeholder="First Name" required>
					</div>
					<div class="form-group col-sm-6">
						<input type="text" name="last_name" class="form-control" placeholder="Last Name" required>
					</div>
				</div>
				<div class="form-group">
					<input type="email" name="email" class="form-control" placeholder="Email Address" required>
				</div>
				<div class="form-group">
					<input type="text" name="address1" class="form-control" placeholder="Address Line 1" required>
				</div>
				<div class="form-group">
					<input type="text" name="address2" class="form-control" placeholder="Address Line 2" required>
				</div>
				<div class="row">
					<div class="form-group col-sm-6">
						<input type="text" name="state" class="form-control" placeholder="State" required>
					</div>
					<div class="form-group col-sm-6">
						<input type="text" name="zip" class="form-control" placeholder="Zip Code" required>
					</div>
				</div>
				<div class="form-group">
					<select class="form-control" name="Country" required>
						<option selected value="">Choose a country</option>
						<option value="United States">United States</option>
						<option value="United Kingdom">United Kingdom</option>
						<option value="Australia">Australia</option>
						<option value="India">India</option>
					</select>
				</div>




				<input type="hidden" name="cmd" value="_xclick">

				<input type="hidden" name="business" value="surjithctly-facilitator@gmail.com">
				<input type="hidden" name="lc" value="IN">

				<input type="hidden" name="item_name" value="Smart Watch Sports Edition">

				<input type="hidden" name="item_number" value="AS1500">

				<input type="hidden" name="amount" value="299.00">

				<input type="hidden" name="currency_code" value="USD">
				<input type="hidden" name="button_subtype" value="services">
				<input type="hidden" name="no_note" value="0">

				<input type="hidden" name="tax_rate" value="5.000">

				<input type="hidden" name="shipping" value="10.00">
				<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest">

				<input type="hidden" name="on0" value="Color">

				<input type="hidden" name="on1" value="Size">


				<input type="hidden" name="notify_url" value="https://demo.web3canvas.com/themeforest/proland/php/verify-ipn.php">

				<input type="hidden" name="return" value="http://demo.web3canvas.com/themeforest/proland/success.html">

				<input type="hidden" name="cancel_return" value="http://demo.web3canvas.com/themeforest/proland/index_buy_paypal.html">

				<div class="submit-area-2 row m0">
					<button type="submit" class="btn btn-rounded js-preorder-btn btn-block"><span>Pay with Paypal</span></button>
				</div>
			</div>

		</form>
	</div>
</div>



<script src="/cdn-cgi/scripts/84a23a00/cloudflare-static/email-decode.min.js"></script>
<script src="<?= get_template_directory_uri() ?>/assets/js/jquery.js"></script>

<script src="<?= get_template_directory_uri() ?>/assets/js/bootstrap.min.js"></script>

<script src="vendors/owl-carousel/owl.carousel.js"></script>
<script src="vendors/magnific-popup/jquery.magnific-popup.min.js"></script>
<script src="vendors/bootstrap-touchspin/jquery.bootstrap-touchspin.min.js"></script>
<script src="vendors/bootstrap-select/js/bootstrap-select.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js"></script>
<script src="js/plugins/gmaps.min.js"></script>
<script src="js/plugins/google-map.js"></script>
<script src="js/plugins/wow.min.js"></script>
<script src="js/plugins/validate.js"></script>

<script src="js/includes/pre-order.js"></script>
<script src="js/includes/subscribe.js"></script>
<script src="js/includes/contact.js"></script>

<script src="js/includes/style-switcher.js"></script>

<script src="js/main.js"></script>
</body>
</html>

