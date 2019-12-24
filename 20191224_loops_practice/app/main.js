let n = Number(prompt('Enter a count of seconds')),
    ost = 0,
    i = 0;

do{
    ost = 0;
    while(n > 0){
        let v = n % 10;
        ost += v;
        n = (n - v) / 10;
    }
    i++;// i = i + 1; i += 1;
    n = ost;

}while(n > 9);

console.log(ost, i);