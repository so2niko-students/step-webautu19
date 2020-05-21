<?php
$name = $_GET['name'];
$country = $_GET['country'];
$city = $_GET['city'];

echo 'I received such data:</br>';
echo 'Name is: '.$name.'<br/>';
echo 'Country is: '.$country.'<br/>';
echo 'City is: '.$city.'<br/>';

/*
С помощью get-параметров передавайте минимальное и максимальное число. 
Выведите на экран все четные числа между минимальным и максимальным включая эти сами числа.
nums.php
min
max

>> nums.php?min=3&max=9
<< 4 6 8

>> nums.php?min = 33&max=6
<< Ошибка данных: min должен быть меньше max

>> nums.php?min=2.999&max=3.55
<< Ошибка данных: числа должны быть целыми

>> nums.php?min=43&max=43
<< Ошибка данных: min не должно быть равно max
*/