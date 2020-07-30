export default class ViewForm{
    modalWindow = document.querySelector('.modal');
    closeClass = 'close';

    constructor(handleOrder){
        this.handleOrder = handleOrder;
    }

    renderForm(){
        this.modalWindow.innerHTML = `<div class="modal_cart">
            <form action="#">
                <p>
                    <input type="text" placeholder="your name" autofocus name="name">
                </p>
                <p>
                    <input type="email" placeholder="your email" name="email">
                </p>
                <p>
                    <input type="tel" placeholder="tel number" name="tel">
                </p>
                <button type="submit">Buy</button>
            </form>
        </div>`;

        this.modalWindow.classList.remove(this.closeClass);
        this.modalWindow.querySelector('form').addEventListener('submit', this.handleOrder);
    }

    getData(ev){
        ev.preventDefault();
        const { email, name, tel } = ev.target.elements;
        return {
            email : email.value,
            name : name.value,
            tel : tel.value
        }
    }

    closeModal(){
        this.modalWindow.innerHTML = '';
        this.modalWindow.classList.add(this.closeClass);
    }
}