<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<?php
$mirrored = 0;
$pair = 0;
$nPair = 0;
$ord = 0;
for($i = 100; $i < 1000; $i++)
{
  $__x = $i % 10;
  $_x_ = ($i % 100 - $__x) / 10;
  $x__ = ($i - $i % 100) / 100;

  // ПРоверка на полиндром
  if($__x == $x__)
  {
    $mirrored++;
  }

  $g1 = $x__ - $_x_ == 1;
  $g2 = $_x_ - $__x == 1;
  if($g1 && $g2)
  {
    $ord++;
  }

}

?>


<h6>Найти количество 3-значных чисел, в которых:</h6>
<ol>
  <li>цифры зеркальные (например, 121)</li>
  <li>все цифры четные</li>
  <li>все цифры нечетные</li>
  <li>цифры идут в порядке от большего к меньшему(например, 321).</li>
</ol>
</body>
</html>