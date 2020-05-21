<?php

function showHistory($arr){
    $tr = '<tr><td>';
    $td = '</td><td>';
    $_tr = '</td></tr>';

    echo "<table>";
    foreach($arr as $v){
        echo $tr . $v[0] . $td . $v[1] . $_tr;
    }
    echo "</table>";
}

function getHistory(){
    $str = trim(file_get_contents(ROOT . '/db/log.txt'));
    $arr = preg_split("/\n/", $str);
    $res = [];
    foreach($arr as $v){
        $res[] = explode('---', $v);
    }
    return $res;
}