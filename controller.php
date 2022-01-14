<?php // Define vars:
$page_title = "EHW JavaScript ES6 Demo: JSON Video Publishing Config Object";

?>

<!--
Project Name:   EHW JavaScript ES6 Demo: JSON Video Publishing Config Object
Proj Shortname: ES6: JSON Video Publishing Config Object 
Filename:       controller.php
Date Created:   01/14/22
Date Updated:   --
Programmer:     Eric Hepperle

Purpose: 
HTML/PHP based sandbox to test web code. This demo will GET and USE
data from a complex, nested JSON/JavaScript OBJECT. The object is a
config for info needed to publish videos to YouTube, Rumble, etc.


Usage:
Launch in browser and open developer console.

Requires:
* Browser
* Web server supporting PHP 7.4
* The project folder must live on a web server, local or remote.

Demonstrates:
* ES6 Arrow Functions
* Map, Reduce, Filter, Find
* Promises, Closures, Anonymous Functions
* SetTimeout, Timers,
* Const, Let, Var
* For-in, For-of, ForEach
* Continue, Break, Switch-Case

Tags:
ES6, arrow functions

-->

<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="description" content="<?php echo $page_title; ?>">
<meta name="author" content="Eric L. Hepperle">
	
<title><?php echo $page_title; ?></title>


<!-- <link rel="stylesheet" href="style/main.css"> -->

<!--<style></style>-->

</head>

<body>

<div id="wrapper" class="container-fluid">

<div id="ehw-top-head">
    <div id="header-img"></div>
    <h2><?php echo $page_title; ?></h2>
    <p>Filename: <span class="property"><?php echo basename(__FILE__); ?></span></p>
</div><!-- /ehw-top-head div -->

<main>
<div>
<h3>PURPOSE:</h3>

<p>This demo will GET and USE data from a complex, nested JSON/JavaScript OBJECT. The object is a
config for info needed to publish videos to YouTube, Rumble, etc.</p>

<!--
<h3>STEPS:</h3>

<p>These are the steps to prepend a div to the body. Note that prepending adds to top of page, whereas appending adds to bottom of page.</p>

<ol>
	<li>Define JSON object</li>
	<li>Create new DIV element</li>
	<li>Add id "ehw-content" to div</li>
	<li>Create text node</li>
	<li>Add text node to div (appendChild)</li>
	<li>Prepend div to body</li>
</ol>
-->

</div>

<!-- Code Section Template
<section class="ehw-code">
<h3>Let, Arrow Functions, ForEach</h3>
<pre>
// add code here
</pre>
</section><!-- /ehw-code -->

</main>

</div><!-- /wrappper -->

<!-- JavaScript -->
<!-- <script src="js/demo.js"></script> -->
<script src="main.js"></script>


</body>
</html>



<!--- --- ---

Notes:
- N/A-->