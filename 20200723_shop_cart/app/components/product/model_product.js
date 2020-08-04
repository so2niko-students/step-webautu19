export default class ModelProduct{
    url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQHE_4ujFb21ZMuAIS3_Qt5dU-segtmnphHBOsp5NAgbH0xCeqCBovNXciME4PE-HFyQES9uJWEEnpf/pub?gid=513180952&single=true&output=tsv';

    constructor(){

    }

    async loadProducts(){
        const req = await fetch(this.url);
        const resp = await req.text();
        this.formatData(resp);

        return this.products;
    }

    formatData(str){
        const reLineBreak = /\n/gm;
        const reTab = /\t/g;
        const arr = str.split(reLineBreak);
        const names = arr.shift().trim().split(reTab);

        this.products = arr.map(strPr => {
            
            const prodProps = strPr.split(reTab);
            
            const prod = prodProps.reduce((acc, prop, i) => {
                const name = names[i];
                acc[name] = prop;
                return acc;
            }, {});

            return prod;
        });

        localStorage.setItem('products', JSON.stringify(this.products));
    }

    getProductsByIds(ids){
        return this.products.filter(product => ids.includes(product.id));
    }

}