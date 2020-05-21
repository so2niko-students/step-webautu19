<?php

define('ROOT', dirname(__FILE__));
require(ROOT . '/http/header.html');

require_once(ROOT . '/common/auth.php');
require_once(ROOT . '/common/history.php');
require_once(ROOT . '/common/log.php');
// Провека на авторизацию
$user;

if(auth()){
  require(ROOT . '/http/info.php');
  addLog($user['username']);
  $arr = getHistory();
  showHistory($arr);
}else{
  require(ROOT . '/http/form.html');
}

//FOOTER
require(ROOT . '/http/footer.html');
?>
