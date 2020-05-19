<?php

$name = $_GET['name'];
$email = $_GET['email'];
$opinion = $_GET['opinion'];

$time = time();
$text = "$time -- $name by $email: $opinion" . PHP_EOL;

file_put_contents('feedbacks.txt', $text, FILE_APPEND);