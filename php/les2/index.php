<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php
// Копирование по ссылке через &
// Передача аргументов в функцию проходит по значению
function IncNumberByTenRef($n1)
{
  $n2 = $n1;
  $n1[0] += 10;
  echo '</br>From function $n1: ';
  var_dump($n1);
  echo '</br>From function $n2: ';
  var_dump($n2);
}
$number2 = [5, 6];
IncNumberByTenRef($number2);
// echo '</br>From outside function:</br>';
// var_dump($number2);


$title = "Chapter 1";

ColorTitle('#EE33FF');

function ColorTitle($color)
{
  global $title;
  echo "<h1 style='color:".$color.";'> $title </h1>";
}

//require останавливает выполнение кода в случае ошибки
//include выполняет код дальше, просто уведомляет об ошибке

//require and include выполняют и показывают файлы html как через echo

//require_once
//include_once
$i = 0;
include 'test.php';//появилась функция hello
include_once 'test.php';
hello();
echo '<p>Hello from main file</p>';


?>
</body>
</html>