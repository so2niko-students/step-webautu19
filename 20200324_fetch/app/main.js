const dniproID = 709930,
    dniproName = 'Dnipro'
    apiKey = '9ca9045cad5b7186cc352589c8d68cc0',
    request = `https://api.openweathermap.org/data/2.5/weather?q=${dniproName}&appid=${apiKey}`;

fetch(request).then(d =>{
    console.log(d);
    return d.json();
}).then(obj=> console.log(obj));



//9ca9045cad5b7186cc352589c8d68cc0
