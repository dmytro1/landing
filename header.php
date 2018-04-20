<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 11/5/17
 * Time: 23:27
 */
?>
<!DOCTYPE html>
<html <?php language_attributes() ?>>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <link href='https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700' rel='stylesheet' type='text/css'>

    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
<!-- LOADER -->
    <div class="loader">
        <div class="loader_inner"></div>
    </div>
    <?php get_template_part('parts/nav') ?>