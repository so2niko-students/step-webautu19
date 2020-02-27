const goods = [
    {
        name : 'Клавиатура',
        price : 300,
        color : 'черный'
    },
    {
        name : 'Мышь',
        price : 250,
        color : 'черный'
    },
    {
        name : 'Микрофон',
        price : 350,
        color : 'черный'
    },
    {
        name : 'Монитор',
        price : 1390,
        color : 'серый'
    },
    {
        name : 'Гарнитура',
        price : 880,
        color : 'белый'
    },
];
const elements = {
    goods : document.querySelector('.goods'),
    search : document.querySelector('#inp-search'),
    from : document.querySelector('#inp-price-from'),
    to : document.querySelector('#inp-price-to'),
}

function render(arr){
    const str = arr.map(el=>{
        return `<div>
                    <strong>${el.name}</strong>
                    <span>${el.color}</span>
                    <span>$${el.price}</span>
                </div>`;
    });
    elements.goods.innerHTML = str.join(' ');

}

render(goods);

elements.search.oninput = globalSearch;
elements.from.oninput = globalSearch;
elements.to.oninput = globalSearch;

function globalSearch(){
    const search = elements.search.value.toLowerCase();
    const min = Number(elements.from.value);
    const max = Number(elements.to.value);
    const goodsCopy = goods.map(go => {
        const {name, price, color} = go;
        return {name, price, color};
    });
    const filteredGoods = goodsCopy.filter(el=>{
        if(el.name.toLowerCase().indexOf(search) > -1 && 
        el.price >= min &&
        el.price <= max){
            el.name = el.name.replace(search, `<mark>${search}</mark>`);
            return true;
        }else{
            return false;
        }
    });
    render(filteredGoods);
}

