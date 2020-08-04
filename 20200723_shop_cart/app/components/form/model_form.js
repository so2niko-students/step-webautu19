export default class ModelForm{
    products = [];
    botUrl = 'https://script.google.com/macros/s/AKfycbwBQ17ypLfL1L1dw_QibRi1nU1Km8PAuJuzc7p_7BGLV8IaSNw/exec'

    setProductCart(products){
        this.products = products;
        console.log(products);
    }

    sendOrder(userData){
        const { email, name, tel } = userData;
        const products = this.products.map(({ title, price, count, id }) => {
            return `\*id\*: ${ id }; \*title\*: ${ title }; \*price\*: ${ price }; \*count\*: ${ count }`;
        }).join(`\n`);
        console.log(products);

        const email2 = email.replace(/\./g, '\\.');
        console.log(email2);
        
        const url = `${ this.botUrl }?email=${ email2 }&name=${ name }&tel=${ tel }&products=${ products }`;
        fetch(url, { mode : 'no-cors' });
        //TODO: решить проблему с отправкой с гугл-апп скрипта
        //TODO: доформатировать текст
    }
}
//https://script.google.com/macros/s/AKfycbzkX0efYKewlji6FH6HCZBW1g0oDIV5j20ATh8N/exec
