<?php
require_once(ROOT . '/db/users_db.php');
function auth(){
  $isLogin = false;
  if(isset($_POST['login']) && isset($_POST['password'])){
  //Проверить логин и пароль
    global $users;
    global $user;
    foreach ($users as $key => $value) {
      if($_POST['login'] == $value['login']){
        if($_POST['password'] == $value['password']){
          $isLogin = true;
          $user = $value;
        }
        break;
      }
    }
  }
  return $isLogin;
}


