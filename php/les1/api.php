<?php
define('ROOT', dirname(__FILE__));
include_once ROOT . '/common/controllers.php';

//api.php - отдаём ошибку
//api.php?stage=1 - Запрос инициализации. просто высылать список вопросов на первый тест, уникальный хэш пользователя
//api.php?stage=2&id=24234&answers=[{"i":6,"a":"answer1"},{"i":2,"a":"answer2"},...] - Получаем ответы на первый тест, высылаем вопросы на второй тест
//api.php?stage=3&id=24234&answers=[{"i":1,"a":["answer1","answer3"]},{"i":2,"a":"answer2"},...] - Получаем ответы на второй тест, высылаем вопросы на третий тест
//api.php?stage=4&id=24234&answers=[{"i":1,"a":"text 1"},{"i":2,"a":"text 2"},...] - Получаем ответы на третий тест, высылаем итоговую оценку

//Запуск контроллера, анализирующего что делать
mainController();

//Ответ в 1 балл за первые 10 вопросов
//http://localhost/api.php?stage=2&id=d5e7bae8c2cde81e604b06b39ae4ed23&answers=[{%22i%22:1,%22a%22:%22answer1%22},{%22i%22:2,%22a%22:%22answer1%22}]

//Второй десяток
//http://localhost/api.php?stage=3&id=d5e7bae8c2cde81e604b06b39ae4ed23&answers=[{%22i%22:1,%22a%22:[%22answer1%22]},{%22i%22:2,%22a%22:[%22answer1%22]}]

//Третий десяток
//http://localhost/api.php?stage=4&id=d5e7bae8c2cde81e604b06b39ae4ed23&answers=[{%22i%22:1,%22a%22:%22answer1%22},{%22i%22:2,%22a%22:%22answer1%22}]