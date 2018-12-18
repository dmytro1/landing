<?php
/**
 * Created by PhpStorm.
 * User: dmytro
 * Date: 4/4/18
 * Time: 17:34
 */
?>
<p> Page not found </p>
<?php
global $wp_query;

var_dump($wp_query->found_posts);

$context = Timber\Timber::get_context();

$terms = Timber\TermGetter::get_terms();

var_dump($terms);
var_dump($context);