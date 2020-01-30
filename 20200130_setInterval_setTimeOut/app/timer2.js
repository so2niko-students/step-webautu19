const t = {
    interval    : 0,
    sec         : 0,
    /**Запускает таймер и информирует об этом
     * или информирует о том, что таймер уже был запущен
     */
    start       : function(){
        if(this.interval == 0){//проверка на первый запуск
            this.interval = setInterval(()=>this.sec++, 1000);
            console.log('Таймер успешно запущен');
        }else{
            console.warn('Таймер уже был запущен');
        }
    },
    /**Останавливает таймер и показыват в консоли время работы таймера
     * или(если таймер не запущен) информирует о проблеме с запуском таймера
     */
    stop        : function(){
        if(this.interval == 0){
            console.warn('Таймер не был запущен');
        }else{
            clearInterval(this.interval);
            console.log('Таймер остановлен', this.sec);
            this.timers.push(this.sec);
            this.interval = 0;
            this.sec = 0;
        }
    },
    timers : []
}