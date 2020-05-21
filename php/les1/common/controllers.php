<?php
include_once ROOT . '/common/questions.php';

function mainController(){
    $error = 'Wrong parameters in query string';
    $db_name = ROOT . '/db/answers.json';
    if(isset($_GET['stage'])){
        switch($_GET['stage']){
            case '1':{
                //СОздать уникальный id
                $id = md5(time() . '-' . rand(1,1000000));

                //Создать в файле answers.json новую запись с таким id
                $answers = json_decode(file_get_contents($db_name));
                $answers->$id = [
                    "1" => 0,
                    "2" => 0,
                    "3" => 0,
                    "create" => time()
                ];
                file_put_contents($db_name, json_encode($answers));

                $q = prepareQuestions4Front(1);

                $answer = ['questions' => $q, 'id' => $id];

                //Просто отдать в виде JSON-строки вопросы без ответов c id
                echo json_encode($answer);
                break;
            }
            case '2':{
                //Проверить наличие id и answers
                if(!isset($_GET['id']) || !isset($_GET['answers'])){
                    echo $error;
                    return false;//Выход из функции
                }

                //ПРоверка первых 10 вопросов
                $userAnswers = json_decode($_GET['answers']);//список словарей (массив объектов)
                $points = 0;
                $rightVal = 1;
                global $questions1;

                foreach($userAnswers as $answ){
                    foreach($questions1 as $que){
                        if($que['i'] == $answ->i){
                            if($que['right'] == $answ->a){
                                $points += $rightVal;
                            }
                            break;
                        }
                    }
                }
                //Проанализировать ответы, записать количество баллов
                $answers = json_decode(file_get_contents($db_name));
                $one = "1";
                $id = $_GET['id'];
                $answers->$id->$one = $points;
                file_put_contents($db_name, json_encode($answers));

                //Просто отдать в виде JSON-строки вопросы без ответов
                $q = prepareQuestions4Front(2);
                $answer = ['questions' => $q, 'id' => $id];
                echo json_encode($answer);
                break;
            }
            case '3':{
                //Проверить наличие id и answers
                if(!isset($_GET['id']) || !isset($_GET['answers'])){
                    echo $error;
                    return false;//Выход из функции
                }

                //ПРоверка вторых 10 вопросов
                $userAnswers = json_decode($_GET['answers']);//список словарей (массив объектов)
                $points = 0;
                $rightVal = 4;
                global $questions2;

                foreach($userAnswers as $answ){
                    foreach($questions2 as $que){
                        if($que['i'] == $answ->i){
                            //Количество штрафных очков
                            $pointCost = 4 / count($que['right']);
                            $penaltyPoints = 0;
                            $rightPoints = 0;

                            //За наличие всех правильных ответов - 4 балла
                            //За каждую ошибку - минус 1 балл
                            //r : ['a1', 'a2']

                            //v1 : ['a1'] -- 2
                            //v2 : ['a2'] -- 2
                            //v3 : ['a1', 'a3'] -- 2
                            //v4 : ['a2', 'a3'] -- 2
                            //v5 : ['a3', 'a4'] -- 0
                            //v6 : ['a1', 'a2'] -- 4
                            //v7 : ['a3'] -- 0
                            //v8 : ['a4'] -- 0
                            //v9 : ['a1', 'a2', 'a3'] -- 3
                            //v10 : ['a1', 'a2', 'a3', 'a4'] -- 2


                            foreach($que['right'] as $right){
                                if(in_array($right, $answ->a)){
                                    $rightPoints += $pointCost;
                                }else{
                                    $penaltyPoints += $pointCost;
                                }
                            }

                            $dif = $rightPoints - $penaltyPoints;

                            if($dif > 0){
                                $points += $dif;
                            }
                            break;
                        }
                    }
                }

                //Проанализировать ответы, записать количество баллов
                $answers = json_decode(file_get_contents($db_name));
                $two = "2";
                $id = $_GET['id'];
                $answers->$id->$two = $points;
                file_put_contents($db_name, json_encode($answers));

                //Просто отдать в виде JSON-строки вопросы без ответов
                $q = prepareQuestions4Front(3);
                $answer = ['questions' => $q, 'id' => $id];
                echo json_encode($answer);
                break;
            }
            case '4':{
                //Проверить наличие id и answers
                if(!isset($_GET['id']) || !isset($_GET['answers'])){
                    echo $error;
                    return false;//Выход из функции
                }

                //ПРоверка третьего десятка вопросов
                $userAnswers = json_decode($_GET['answers']);//список словарей (массив объектов)
                $points = 0;
                $rightVal = 5;
                global $questions3;

                foreach($userAnswers as $answ){
                    foreach($questions3 as $que){
                        if($que['i'] == $answ->i){
                            if($que['right'] == $answ->a){
                                $points += $rightVal;
                            }
                            break;
                        }
                    }
                }
                //Проанализировать ответы, записать количество баллов
                $answers = json_decode(file_get_contents($db_name));
                $three = "3";
                $id = $_GET['id'];
                $answers->$id->$three = $points;
                file_put_contents($db_name, json_encode($answers));
                $t2 = "2";
                $t1 = "1";
                //Проанализировать ответы, считать общее количество баллов
                $allPoints = $answers->$id->$t1 + $answers->$id->$t2 + $points;
                //Отдать результат в баллах
                echo $allPoints;
                break;
            }
            default:{
                echo $error;
                break;
            }
        }
    }else{
        echo $error;
    }
}