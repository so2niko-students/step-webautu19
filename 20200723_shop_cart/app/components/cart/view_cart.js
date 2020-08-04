export default class ViewCart{
    domCartCount = document.querySelector('.cart_count');
    modalWindow = document.querySelector('.modal');
    btnCart = document.querySelector('.cart_logo');
    closeClass = 'close';

    constructor(listeners){
        this.btnCart.addEventListener('click', listeners.open);
        this.listeners = listeners;
    }

    renderCartCount(count){
        this.domCartCount.innerText = count == 0 ? '': count;
    }

    renderModal({ products, price}){
        //Показываем модалку
        this.modalWindow.classList.remove(this.closeClass);
        const trs = products.map(this.renderProduct).join('');

        this.modalWindow.innerHTML = `<div class="modal_cart">
        <div class="cart_buttons">
            <button class="btn_modal_close">X</button>
        </div>
        <table>
            ${ trs }
        </table>
        <div class="sum">SUM: <span class="modal_cart_sum">${ price }</span></div>
        <div class="cart_buttons">
            <button class="btn_modal_clear">Clear</button>
            <button class="btn_modal_buy">Buy</button>
        </div>
    </div>`;

        this.addModalListeners();
    }

    addModalListeners(){
        const { close, clear, buy, count } = this.listeners;

        this.modalWindow.querySelector('.btn_modal_close').addEventListener('click', close);
        this.modalWindow.querySelector('.btn_modal_clear').addEventListener('click', clear);
        this.modalWindow.querySelector('.btn_modal_buy').addEventListener('click', buy);

        this.modalWindow.querySelectorAll('input').forEach(el => el.addEventListener('input', count));
    }

    renderProduct(prod, pid){
        const { title, price, count, id } = prod;
        return `<tr>
        <td>${ pid + 1 }</td>
        <td>${ title }</td>
        <td>${ price }</td>
        <td><input type="number" min="0" class="inp_product_cart" value="${ count || 1 }" data-id="${ id }"></td>
    </tr>`
    }

    closeModal(){
        this.modalWindow.classList.add(this.closeClass);
    }
}