let interval = 0;
let sec = 0;
/**Запускает таймер и информирует об этом
 * или информирует о том, что таймер уже был запущен
 */
function start(){
    if(interval == 0){//проверка на первый запуск
        interval = setInterval(()=>sec++, 1000);
        console.log('Таймер успешно запущен');
    }else{
        console.warn('Таймер уже был запущен');
    }
}

/**Останавливает таймер и показыват в консоли время работы таймера
 * или(если таймер не запущен) информирует о проблеме с запуском таймера
 */
function stop(){
    if(interval == 0){
        console.warn('Таймер не был запущен');
    }else{
        clearInterval(interval);
        console.log('Таймер остановлен', sec);
        interval = 0;
        sec = 0;
    }
}