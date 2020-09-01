export default class ViewNotification{
    notificationDOM = document.querySelector('.notification');
    showClass = 'show_notification';

    renderAddToCart(){
        this.notificationDOM.innerHTML = '<strong>ДОБАВЛЕН В КОРЗИНУ</strong>';
        this.notificationDOM.classList.add(this.showClass);

        setTimeout(() => this.notificationDOM.classList.remove(this.showClass), 4000);
    }
    /**
     * 2sec - up
     * 2sec - wait
     * 2sec - down
     */
}