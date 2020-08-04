export default class ModelForm{
    products = [];
    botUrl = 'https://api.telegram.org/bot1362251820:AAHlMA0ngWHlz123TRJlTfmkBiZVVetf-h0/sendMessage?chat_id='
    chatId = '-353593305';

    constructor(){

    }

    setProductCart(products){
        this.products = products;
    }

    sendOrder(userData){
        const { email, name, tel } = userData;
        const url = `${ this.botUrl }${ this.chatId }&text=email:${ email };name:${ name };tel:${ tel }`;
        fetch(url);
    }
}

//https://api.telegram.org/bot1362251820:AAHlMA0ngWHlz123TRJlTfmkBiZVVetf-h0/sendMessage?chat_id=-353593305&text=hello