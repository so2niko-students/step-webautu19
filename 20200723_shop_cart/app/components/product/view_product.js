export default class ViewProduct{
    domProducts = document.querySelector('.product_list');

    constructor(handleClickBuyProduct){
        this.handleClickBuyProduct = handleClickBuyProduct;
    }

    render(products){
        this.domProducts.innerHTML = products.map(el => this.formatProduct(el)).join('');
        this.domProducts.addEventListener('click', this.handleClickBuyProduct);
    }

    formatProduct(prod){
        const { id, photo, title, price, description } = prod;
        return `
            <div class="card_product">
                <div>
                    <img src="${ photo }" alt="${ title }">
                </div>
                <h3>${ price } UAH ${ title }</h3>
                <p>${ description }</p>
                <div>
                    <button data-product-id="${ id }">to cart</button>
                </div>
            </div>
        `;
    }
}