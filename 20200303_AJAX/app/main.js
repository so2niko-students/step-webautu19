function load(){
    //Создание объекта Ajax
    const aja = new XMLHttpRequest();

    //Настройка получения данных 
    //readystatechange
    //load
    // aja.onreadystatechange = function(){
    //     if(this.status == 200 && this.readyState == 4){
    //         show(this.responseText);
    //     }
    // }
    aja.addEventListener('readystatechange', function(){
        if(this.status == 200 && this.readyState == 4){
            show(this.responseText);
        }
    });

    //Настройка отправки запроса на сервер
    aja.open('GET', '/data/data.json');
    //Отправка
    aja.send();
}

function show(data){
    // data = csvParser(data);
    console.log(JSON.parse(data));
    document.querySelector('#root').innerHTML = renderTable(JSON.parse(data));
}

function renderTable(arr){
    // return `<table>${arr.map(el=>`<tr><td>${el.id}</td><td>${el.author}</td><td>${el.message}</td></tr>`).join('')}</table>`;
    // const tableStart = '<table>';
    // const tableEnd = '</table>';
    // const trStart = '<tr>';
    // const trEnd = '</tr>';
    // const tdStart = '<td>';
    // const tdEnd = '</td>';

    // const tdArr = arr.map(el => trStart + tdStart + el.id + tdEnd + tdStart + el.author + tdEnd + tdStart + el.message + tdEnd + trEnd);
    // const tdArr = arr.map(el => `<tr><td>${el.id}</td><td>${el.author}</td><td>${el.message}</td></tr>`);
    const tdArr = arr.map(function(el){
        return `<tr><td>${el.id}</td><td>${el.author}</td><td>${el.message}</td></tr>`;
    });
    const res = tdArr.join('');

    return `<table>${res}</table>`;
}

function csvParser(data){
    const d = data.split('\n').map(el=> el.split(';'));
    let str = '<table>';
    d.forEach(row=>{
       str += '<tr>' 
        row.forEach(dot=>{
            str += `<td>${dot}</td>`;
        });
        str += '</tr>';
    });
    str += '</table>';
    console.table(d);
    return str;
}

document.querySelector('.btn-load').addEventListener('click', load);
// document.querySelector('.btn-load').addEventListener('click', load2);
// document.querySelector('.btn-load').onclick = load;
// document.querySelector('.btn-load').onclick = load2;

//JavaScript Object Notation
//JSON