// let name = 'Nick';

// function showName(n = 'John Doe'){
//     console.log(n);
// }

// let sName = showName;

// btn1.onclick = showName;

/*Функция для работы с запросом к серверу
arguments : 
    string url : url ресурса(сайта, API)
    function callback : callback-функция, обработчик загрузки данных
return :
    boolean false - если один или оба аргумента не были переданы
    boolean true - в случае успешного окончания работы функции
*/
function load(url, callback){
    console.log(url, callback);
    if(!url || !callback){//Проверка на undefined
        return false;
    }

    const aja = new XMLHttpRequest();
    // aja.onload = showUser;
    aja.addEventListener('load', callback);

    aja.open('GET', url);

    aja.send();

    return true;
}

/**Функция обработчик события load объекта AJAX
 * arguments : none
 * return : none
 */
function showUser(){
    console.log('Операция получения данных с сервера завершена');
    const str = dom.cards.innerHTML;
    dom.cards.innerHTML = renderUser(JSON.parse(this.responseText).results[0]) + str;
}

/**Функция генерации карточки в виде HTML-строки
 * arguments:
 *  object user : полная информация о новом пользователе
 * return:
 *  string : html-строку с карточкой
 */
function renderUser(user){
    return `<div class="card d-inline-block m-2" style="width: 18rem;">
    <img src="${user.picture.large}" class="card-img-top" alt="user-pic">
    <div class="card-body">
        <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
        <p class="card-text">${user.dob.age} ${user.gender}, ${user.nat}</p>
    </div>
</div>`;
}

const dom = {
    cards : document.querySelector('.cards'),
    btn   : document.querySelector('.btn-add-user')
};

/**Вешаем обработчик клика на кнопку*/
dom.btn.addEventListener('click', ()=>load('https://randomuser.me/api/', showUser));