function getDates(obj){
    const dates = [];
    for(let i = 0; i < obj.list.length; i++){
        const date = new Date(obj.list[i].dt * 1000);
        dates.push(date.toLocaleString());
    }

    return dates;
}

//Ищет в объекте данных максимальное и минимальное значение ветра. Возвращает в виде объекта {min: 1, max : 44}
function windExtrem(obj){
    let max = 0,
        min = 1 / 0;

    for(let i = 0; i < obj.list.length; i++){
        if(max < obj.list[i].wind.speed){
            max = obj.list[i].wind.speed;
        }
        // if(min > obj.list[i].wind.speed){
        //     min = obj.list[i].wind.speed;
        // }
        min = min > obj.list[i].wind.speed? obj.list[i].wind.speed: min;
    }

    return {min, max};
}

function info(obj){
    const dates = getDates(obj);
    const info = [];
    for(let i = 0; i < obj.list.length; i++){
        let weatherStr = '';
        for(let j = 0; j < obj.list[i].weather.length; j++){
            weatherStr += obj.list[i].weather[j].main + ' ';
        }
        info[i] = {weather : weatherStr.trim()};
        const dateStr = dates[i].split(', ');
        info[i].date = dateStr[0];
        info[i].time = dateStr[1];
    }

    return info;
}

function arrayList(obj){
    // let i = 0;
    // while(i < obj.list.length){
    //     console.log(obj.list[i].weather);
    //     i++;
    // }

    // for(el of obj.list){
    //     console.log(el.dt);
    // }

    // obj.list.forEach(function(el, i, arr){
    //     console.log(el.dt);
    //     console.log(i);
    //     console.log(arr);
    // });//callback - функция

    // obj.list.forEach((el, i, arr)=>{
    //     console.log(el.dt);
    //     console.log(i);
    //     console.log(arr);
    // });//callback - функция

    obj.list.forEach(showEl());
}



function showEl(weather, ind, arr){
    console.log(weather, ind, arr);
}

// arrayList(london);

function humidityDif(obj){
    let min = 1 / 0,
        max = 0;

    // obj.list.forEach((el)=>{
    //     if(max < el.main.humidity){
    //         max = el.main.humidity;
    //     }

    //     if(min > el.main.humidity){
    //         min = el.main.humidity;
    //     }
    // });

    for(el of obj.list){
        if(max < el.main.humidity){
            max = el.main.humidity;
        }

        if(min > el.main.humidity){
            min = el.main.humidity;
        }
    }

    return max - min;
}

function averageWind(obj){
    let deg = 0,
        speed = 0;

    for(m of obj.list){
        console.log(m.wind.deg, m.wind.speed);
        deg += m.wind.deg;
        speed += m.wind.speed;
    }

    deg /= obj.list.length;
    speed /= obj.list.length;

    return {deg, speed};
}

// console.log(getDates(london));
// console.log(windExtrem(london));
// console.log(info(london));
// console.log(humidityDif(london));
console.log(averageWind(london));