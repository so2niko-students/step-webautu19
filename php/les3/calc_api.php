<?php

$sign = $_GET['s'];
$a = $_GET['a'];
$b = $_GET['b'];

switch($sign)
{    
    case '+':
        $res = $a + $b;
        break;
    case '-':
        $res = $a - $b;
        break;
    case '*':
        $res = $a * $b;
        break;
    case '/':
        $res = $a / $b;
        break;
    default:
        $res = $a + $b;
}
echo $res;