const count = Number(prompt('Enter a count of objects', 1));
const rnd = [];
for(let i = 0; i < count; i++){
    let o = {
        num : i
    };
    rnd.push(o);
}

console.log(rnd);