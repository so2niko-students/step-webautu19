<?php

function prepareQuestions4Front($id = 1){
    global $questions1, $questions2, $questions3;
    $questions = [$questions1, $questions2, $questions3];
    $q = [];
    foreach ($questions[$id - 1] as $val){
        unset($val['right']);
        $q[] = $val;
    }

    return $q;
}




$questions1 = [
    [
        'question' => 'Question 1',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => 'answer1',
        'i' => 1
    ],
    [
        'question' => 'Question 2',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => 'answer1',
        'i' => 2
    ],
    [
        'question' => 'Question 3',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => 'answer1',
        'i' => 3
    ],
    [
        'question' => 'Question 4',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => 'answer1',
        'i' => 4
    ],
    [
        'question' => 'Question 5',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => 'answer1',
        'i' => 5
    ],
    [
        'question' => 'Question 6',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => 'answer2',
        'i' => 6
    ],
    [
        'question' => 'Question 7',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => 'answer2',
        'i' => 7
    ],
    [
        'question' => 'Question 8',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => 'answer2',
        'i' => 8
    ],
    [
        'question' => 'Question 9',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => 'answer2',
        'i' => 9
    ],
    [
        'question' => 'Question 10',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => 'answer2',
        'i' => 10
    ],
];

$questions2 = [
    [
        'question' => 'Question 1',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => ['answer1', 'answer2'],
        'i' => 1
    ],
    [
        'question' => 'Question 2',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => ['answer1'],
        'i' => 2
    ],
    [
        'question' => 'Question 3',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => ['answer1', 'answer2'],
        'i' => 3
    ],
    [
        'question' => 'Question 4',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => ['answer1'],
        'i' => 4
    ],
    [
        'question' => 'Question 5',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => ['answer1', 'answer2', 'answer3'],
        'i' => 5
    ],
    [
        'question' => 'Question 6',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => ['answer2'],
        'i' => 6
    ],
    [
        'question' => 'Question 7',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => ['answer1', 'answer2'],
        'i' => 7
    ],
    [
        'question' => 'Question 8',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => ['answer2'],
        'i' => 8
    ],
    [
        'question' => 'Question 9',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => ['answer1', 'answer2'],
        'i' => 9
    ],
    [
        'question' => 'Question 10',
        'answers' => ['answer1', 'answer2', 'answer3', 'answer4'],
        'right' => ['answer2'],
        'i' => 10
    ],
];

$questions3 = [
    [
        'question' => 'Question 1',
        'right' => 'answer1',
        'i' => 1
    ],
    [
        'question' => 'Question 2',
        'right' => 'answer1',
        'i' => 2
    ],
    [
        'question' => 'Question 3',
        'right' => 'answer1',
        'i' => 3
    ],
    [
        'question' => 'Question 4',
        'right' => 'answer1',
        'i' => 4
    ],
    [
        'question' => 'Question 5',
        'right' => 'answer1',
        'i' => 5
    ],
    [
        'question' => 'Question 6',
        'right' => 'answer2',
        'i' => 6
    ],
    [
        'question' => 'Question 7',
        'right' => 'answer2',
        'i' => 7
    ],
    [
        'question' => 'Question 8',
        'right' => 'answer2',
        'i' => 8
    ],
    [
        'question' => 'Question 9',
        'right' => 'answer2',
        'i' => 9
    ],
    [
        'question' => 'Question 10',
        'right' => 'answer2',
        'i' => 10
    ],
];