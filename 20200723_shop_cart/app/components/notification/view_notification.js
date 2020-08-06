export default class ViewNotification{
    notificationDOM = document.querySelector('.notification');

    renderAddToCart(){
        this.notificationDOM.innerHTML = '<strong>ДОБАВЛЕН В КОРЗИНУ</strong>';
        setTimeout(() => this.notificationDOM.innerHTML = '', 3000);
    }
}