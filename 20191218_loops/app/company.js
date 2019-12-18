let sum = 0,
    max = -1 / 0,
    min = 1 / 0,
    imax = 0,
    imin = 0,
    aver = 0; 
for(let i = 1; i <= 12; i++){
    // let month = Number(prompt('Enter a profit by month #' + i));
    let month = Math.floor(Math.random() * 1000);
    sum += month;

    if(month > max){
        max = month;
        imax = i;
    }

    if(month < min){
        min = month;
        imin = i;
    }

    console.log(month);
}

aver = sum / 12;

// alert('Year profit is: $' + sum);
// alert('Average profit is: $' + aver);
// alert('Max profit is: $' + max + ' by month ' + imax);
// alert('Min profit is: $' + min + ' by month ' + imin);

document.write('<h2>Hello</h2>');