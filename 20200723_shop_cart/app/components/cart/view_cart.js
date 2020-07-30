export default class ViewCart{
    domCartCount = document.querySelector('.cart_count');
    modalWindow = document.querySelector('.modal');
    btnCart = document.querySelector('.cart_logo');
    closeClass = 'close';

    constructor(handleOpenModal){
        this.btnCart.addEventListener('click', handleOpenModal);
    }

    renderCartCount(count){
        this.domCartCount.innerText = count;
    }

    renderModal(products){
        //Показываем модалку
        this.modalWindow.classList.remove(this.closeClass);
        const trs = products.map(this.renderProduct).join('');

        this.modalWindow.innerHTML = `<div class="modal_cart">
        <button class="btn_close">X</button>
        <table>
            ${ trs }
        </table>
        <div class="sum">SUM: <span class="modal_cart_sum">1200</span></div>
        <div class="cart_buttons">
            <button>Clear</button><button>Buy</button>
        </div>
    </div>`
    }

    renderProduct(prod, pid){
        const { title, price, count } = prod;
        return `<tr>
        <td>${ pid + 1 }</td>
        <td>${ title }</td>
        <td>${ price }</td>
        <td><input type="number" min="0" class="inp_product_cart" value="${ count || 0 }"></td>
    </tr>`
    }
}