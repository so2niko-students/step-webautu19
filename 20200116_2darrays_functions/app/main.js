const house = [];
const porch = 3 || parseInt(prompt('How many porches in your house?', 1));
const floors = 10 || parseInt(prompt('How many floors in your house?', 1));
const countApparts = 4 || parseInt(prompt('How many appartaments on floor?', 1));
const maxApps = floors * countApparts;
let count = 1;

let max = [0, 0];

for(let i = 0; i < porch; i++){
    house[i] = [];
    // house.push([]);
    for(let j = 0; j < floors; j++){
        house[i][j] = [];
        for(let h = 0; h < countApparts; h++){
            let humans = Math.floor(Math.random() * 20 + 1);
        
            if(humans > max[1]){
                max[1] = humans;
                max[0] = count;
                console.log('finding maximum: ', max);    
            }

            house[i][j].push([count++, humans]);   
        }
             
    }
}

console.log(house);

// const appN = parseInt(prompt('Enter the appartment number, please', 1));
// const humanN = parseInt(prompt('Enter a count of humans, please', 1));
// const porchN = parseInt(appN / maxApps);
// const inAp = appN % maxApps - 1;

// house[porchN][inAp] = [appN, humanN];

let countResidents = 0;
const appsWithMax = [];
for(let podjezd = 0; podjezd < porch; podjezd++){
    for(let etaj = 0; etaj < floors; etaj++){
        for(let kvart = 0; kvart < countApparts; kvart++){
            countResidents += house[podjezd][etaj][kvart][1];
        
            // if(house[podjezd][kvart][1] > max[1]){
            //     max[1] = house[podjezd][kvart][1];
            //     max[0] = house[podjezd][kvart][0];
            //     console.log('finding maximum: ', max);    
            // }
    
            if(house[podjezd][etaj][kvart][1] == max[1]){
                appsWithMax.push(house[podjezd][etaj][kvart][0]);
            }
        }
        
    }
}
console.log(countResidents);
console.log('numbers of apps: ', appsWithMax);