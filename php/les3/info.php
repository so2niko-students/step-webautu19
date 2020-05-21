<?php

require_once 'users_db.php';
var_dump($_POST);
$login = $_POST['login'];
$password = $_POST['password'];
$isLogin = false;


foreach ($users as $key => $value) {
    if($login == $value['login']){
        if($password == $value['password']){
            $user = $value;
            $isLogin = true;
        }
        break;
    }
}

if($isLogin){
    echo json_encode($user);
}else{
    echo '{"status":"failed"}';
}