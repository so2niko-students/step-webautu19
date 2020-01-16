console.clear();
const votes = [
    [
        [
            'Лукашенко',
            3000000
        ],
        [
            'Порошенко',
            2980000
        ],
        [
            'Денисенко',
            3100000
        ],
        [
            'Петренко',
            3100
        ],
        [
            'Василенко',
            1000
        ],
        [
            'Радженко',
            5
        ]
    ],
    [
        [
            'Лукашенко',
            3000000
        ],
        [
            'Порошенко',
            2000000
        ],
        [
            'Денисенко',
            5000000
        ]
    ]
];

console.log(votes);
let summary = 0;
let winner = {
    name : 'noname',
    votes : 0
};

for(let i = 0; i < votes.length; i++){
    for(let candidate = 0; candidate < votes[i].length; candidate++){
        summary += votes[i][candidate][1];
        if(winner.votes < votes[i][candidate][1]){
            winner.votes = votes[i][candidate][1];
            winner.name = votes[i][candidate][0];
        }
    }

}

console.log('Summ of votes: ', summary);
console.log(winner);