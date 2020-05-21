<?php
function addLog($str){
    $d = date('Y.m.d/G:i:s'); //2020.04.16/20:38:12
    $strF = "$str --- $d\n"; //Пользователь --- 2020.04.16/19:42:35
    file_put_contents(ROOT . '/db/log.txt', $strF, FILE_APPEND);
}