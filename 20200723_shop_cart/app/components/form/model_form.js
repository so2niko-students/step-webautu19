export default class ModelForm{
    products = [];
    botUrl = 'https://api.telegram.org/bot1362251820:AAHlMA0ngWHlz123TRJlTfmkBiZVVetf-h0/sendMessage?parse_mode=MarkdownV2&chat_id='
    chatId = '-353593305';

    constructor(){

    }

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
        
        const url = `${ this.botUrl }${ this.chatId }&text=\*email\*: ${ email2 }; \*name\*: ${ name }; \*tel\*: ${ tel }; \*products\*: ${ products }`;
        fetch(url);
    }
}

//https://api.telegram.org/bot1362251820:AAHlMA0ngWHlz123TRJlTfmkBiZVVetf-h0/sendMessage?chat_id=-353593305&text=hello