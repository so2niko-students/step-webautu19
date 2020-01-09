const inputProduct = document.querySelector('.inp_product');
// console.dir(inputProduct);
const products = [];
// let i = 0;

document.querySelector('.btn_add-product').addEventListener('click', function(){
    let str = inputProduct.value;
    if(str != ''){
        // products[i] = parseFloat(str);
        // i++;
        // products[products.length] = parseFloat(str);
        
        products.push(parseFloat(str));
        console.log(products);
    }    
    inputProduct.value = '';
});

/**
 * PUSH - заносит новый элемент в конец массива
 * POP - забирает элемент из конца массива
 * SHIFT - забирает элемент с головы массива и сдвигает остальные элементы
 * UNSHIFT - заносит новый элемент в начало массива и сдвигает остальные элементы
 */