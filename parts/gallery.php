<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 5/13/18
 * Time: 23:24
 */ ?>

<style>

    /**
 * Variables
 */
    /**
	 * Base Styles
	 * 1. Improve box model
	 * 2. Enable fluid images
	 */
    *, *:before, *:after {
        box-sizing: border-box;
        /* 1 */
    }

    body {
        background-color: #f5f5f5;
    }

    img {
        max-width: 100%;
        /* 2 */
    }

    /**
	 * Container Styles
	 */
    /*.container {*/
    /*max-width: 30em;*/
    /*margin: 0 auto;*/
    /*padding: 1em;*/
    /*}*/
    /**
	 * Helper Styles
	 */
    .ir {
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
    }

    /**
	 * Gallery Styles
	 * 1. Enable fluid images
	 */
    .gallery {
        overflow: hidden;
    }

    .gallery__hero {
        overflow: hidden;
        position: relative;
        padding: 2em;
        margin: 0 0 0.33333em;
        background: #fff;
    }

    .is-zoomed .gallery__hero {
        cursor: move;
    }

    .is-zoomed .gallery__hero img {
        max-width: none;
        position: absolute;
        z-index: 0;
        top: -50%;
        left: -50%;
    }

    .gallery__hero-enlarge {
        position: absolute;
        right: 0.5em;
        bottom: 0.5em;
        z-index: 1;
        width: 30px;
        height: 30px;
        opacity: 0.5;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iNS4wIC0xMC4wIDEwMC4wIDEzNS4wIiBmaWxsPSIjMzRCZjQ5Ij48cGF0aCBkPSJNOTMuNTkzIDg2LjgxNkw3Ny4wNDUgNzAuMjY4YzUuNDEzLTYuODczIDguNjQyLTE1LjUyNiA4LjY0Mi0yNC45MTRDODUuNjg3IDIzLjEwNCA2Ny41OTMgNSA0NS4zNDMgNVM1IDIzLjEwNCA1IDQ1LjM1NGMwIDIyLjI0IDE4LjA5NCA0MC4zNDMgNDAuMzQzIDQwLjM0MyA5LjQgMCAxOC4wNjItMy4yNCAyNC45MjQtOC42NTNsMTYuNTUgMTYuNTZjLjkzNy45MjcgMi4xNjIgMS4zOTYgMy4zODggMS4zOTYgMS4yMjUgMCAyLjQ1LS40NyAzLjM5LTEuMzk2IDEuODc0LTEuODc1IDEuODc0LTQuOTEyLS4wMDItNi43ODh6bS00OC4yNS0xMC43MWMtMTYuOTU0IDAtMzAuNzUzLTEzLjc5OC0zMC43NTMtMzAuNzUyIDAtMTYuOTY0IDEzLjgtMzAuNzY0IDMwLjc1My0zMC43NjQgMTYuOTY0IDAgMzAuNzUzIDEzLjggMzAuNzUzIDMwLjc2NCAwIDE2Ljk1NC0xMy43ODggMzAuNzUzLTMwLjc1MyAzMC43NTN6TTYzLjAzMiA0NS4zNTRjMCAyLjM0NC0xLjkwNyA0LjI2Mi00LjI2MiA0LjI2MmgtOS4xNjR2OS4xNjRjMCAyLjM0NC0xLjkwNyA0LjI2Mi00LjI2MiA0LjI2Mi0yLjM1NSAwLTQuMjYyLTEuOTE4LTQuMjYyLTQuMjYydi05LjE2NGgtOS4xNjRjLTIuMzU1IDAtNC4yNjItMS45MTgtNC4yNjItNC4yNjIgMC0yLjM1NSAxLjkwNy00LjI2MiA0LjI2Mi00LjI2Mmg5LjE2NHYtOS4xNzVjMC0yLjM0NCAxLjkwNy00LjI2MiA0LjI2Mi00LjI2MiAyLjM1NSAwIDQuMjYyIDEuOTE4IDQuMjYyIDQuMjYydjkuMTc1aDkuMTY0YzIuMzU1IDAgNC4yNjIgMS45MDcgNC4yNjIgNC4yNjJ6Ii8+PC9zdmc+);
        background-repeat: no-repeat;
        transition: opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    .gallery__hero-enlarge:hover {
        opacity: 1;
    }

    .is-zoomed .gallery__hero-enlarge {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iNS4wIC0xMC4wIDEwMC4wIDEzNS4wIiBmaWxsPSIjMzRCZjQ5Ij48cGF0aCBkPSJNOTMuNTkzIDg2LjgxNkw3Ny4wNDUgNzAuMjY4YzUuNDEzLTYuODczIDguNjQyLTE1LjUyNiA4LjY0Mi0yNC45MTRDODUuNjg3IDIzLjEwNCA2Ny41OTMgNSA0NS4zNDMgNVM1IDIzLjEwNCA1IDQ1LjM1NGMwIDIyLjI0IDE4LjA5NCA0MC4zNDMgNDAuMzQzIDQwLjM0MyA5LjQgMCAxOC4wNjItMy4yNCAyNC45MjQtOC42NTNsMTYuNTUgMTYuNTZjLjkzNy45MjcgMi4xNjIgMS4zOTYgMy4zODggMS4zOTYgMS4yMjUgMCAyLjQ1LS40NyAzLjM5LTEuMzk2IDEuODc0LTEuODc1IDEuODc0LTQuOTEyLS4wMDItNi43ODh6TTE0LjU5IDQ1LjM1NGMwLTE2Ljk2NCAxMy44LTMwLjc2NCAzMC43NTMtMzAuNzY0IDE2Ljk2NCAwIDMwLjc1MyAxMy44IDMwLjc1MyAzMC43NjQgMCAxNi45NTQtMTMuNzkgMzAuNzUzLTMwLjc1MyAzMC43NTMtMTYuOTUzIDAtMzAuNzUzLTEzLjgtMzAuNzUzLTMwLjc1M3pNNTguNzcyIDQ5LjYxSDMxLjkyYy0yLjM1NSAwLTQuMjYzLTEuOTA3LTQuMjYzLTQuMjZzMS45MDgtNC4yNjMgNC4yNjItNC4yNjNINTguNzdjMi4zNTQgMCA0LjI2MiAxLjkwOCA0LjI2MiA0LjI2MnMtMS45MSA0LjI2LTQuMjYyIDQuMjZ6Ii8+PC9zdmc+);
    }

    .gallery__thumbs {
        text-align: center;
        background: #fff;
    }

    .gallery__thumbs a {
        display: inline-block;
        height: auto;
        width: 20%;
        padding: 0.5em;
        opacity: 0.75;
        transition: opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    .gallery__thumbs a:hover {
        opacity: 1;
    }

    .gallery__thumbs a.is-active {
        opacity: 0.2;
    }

</style>


<!-- Gallery -->
<div id="js-gallery" class="gallery">

    <!--Gallery Hero-->
    <div class="gallery__hero">
        <a href="" class="gallery__hero-enlarge ir" data-gallery="zoom">Zoom</a>

        <img src="https://public-619e3.firebaseapp.com/Product-Gallery/products/normal/product-01_view-01.jpg">
    </div>
    <!--Gallery Hero-->

    <!--Gallery Thumbs-->
    <div class="gallery__thumbs">
        <a href="https://public-619e3.firebaseapp.com/Product-Gallery/products/normal/product-01_view-01.jpg"
           data-gallery="thumb" class="is-active">
            <img src="https://public-619e3.firebaseapp.com/Product-Gallery/products/thumb/product-01_view-01.jpg">
        </a>
        <a href="https://public-619e3.firebaseapp.com/Product-Gallery/products/normal/product-01_view-02.jpg"
           data-gallery="thumb">
            <img src="https://public-619e3.firebaseapp.com/Product-Gallery/products/thumb/product-01_view-02.jpg">
        </a>
        <a href="https://public-619e3.firebaseapp.com/Product-Gallery/products/normal/product-01_view-03.jpg"
           data-gallery="thumb">
            <img src="https://public-619e3.firebaseapp.com/Product-Gallery/products/thumb/product-01_view-03.jpg">
        </a>
    </div>
    <!--Gallery Thumbs-->

</div><!--.gallery-->
<!-- Gallery -->