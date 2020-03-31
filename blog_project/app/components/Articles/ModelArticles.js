export class ModelArticles{
    cellHeaders = [
        'time',
        'author',
        'article',
        'description',
        'url'
    ];
    link = 'https://spreadsheets.google.com/feeds/cells/1vfqiUzsqWXu5ACCihPusUqksQWxhcVfsuHeKYBWjhv8/1/public/full?alt=json';
    data = [];
    authors = new Set();
    dates = new Set();

    constructor(){
        this.rowSize = this.cellHeaders.length;
    }

    loadArticles(){
        return fetch(this.link).then(r => r.json()).then(d =>{
            this.parseData(d);
            return this.data;
        });
    }

    //Преобразует исходные данные с сервера в нормальный читаемый вид
    parseData(d){
        const preparedData = d.feed.entry.map(cell => cell.content.$t).slice(this.rowSize);

        preparedData.forEach((element, i) => {
            const id = Math.floor(i / this.rowSize);
            const name = i % this.rowSize;

            if(!this.data[id]){
                this.data[id] = {};
            }

            this.data[id][this.cellHeaders[name]] = element;
        });

        for(let art of this.data){
            this.authors.add(art.author);
            this.dates.add(art.time.split(' ')[0]);//make array of unic dates

            art.isFeedback = Math.random() > .5;
        }
        
        console.log(this.data);
    }

    getSearchedData(s){
        //Если поиск - пустая строка, то отдаем весь массив данных
        if(s === ''){
            return this.data;
        }

        const sReg = new RegExp(s, 'i');
        //Полностью копирую исходные данные для функционала поиска и выделения найденного цветом
        //Вариант 1. Новый
        // const newArr = this.data.map((art) => {
        //     const {time, author, article, description, url} = art;//Деструктурирующее присваивание
        //     return {time, author, article, description, url};
        // });

        //Вариант 2. Старый
        // const newArr = [];
        // const dLen = this.data.length;
        // for(let i = 0; i < dLen; i++){
        //     newArr.push({
        //         time : this.data[i].time,
        //         author : this.data[i].author,
        //         article : this.data[i].article,
        //         description : this.data[i].description,
        //         url : this.data[i].url,
        //     });
        // }

        //Вариант 3. Необычный
        const newArr = JSON.parse(JSON.stringify(this.data));

        const searchD = newArr.filter(article => {
            if(sReg.test(article.author) || sReg.test(article.article) || sReg.test(article.description)){
                //Магия
                article.author = article.author.replace(sReg, `<mark>${s}</mark>`);
                article.article = article.article.replace(sReg, `<mark>${s}</mark>`);
                article.description = article.description.replace(sReg, `<mark>${s}</mark>`);

                return true;
            }

            return false;
        });

        return searchD;
    }

    get authorsArr(){
        return [...this.authors];
    }

    get datesArr(){
        return [...this.dates];
    }

    filterBy(arr){
        if(arr.length == 0){
            return this.data;
        }

        const filtered = this.data.filter(msg => arr.indexOf(msg.author) > -1);

        return filtered;
    }

    filterByDate(date){
        const regDate = new RegExp(date);
        const filtered = this.data.filter(msg => regDate.test(msg.time));
        return filtered;
    }

    filterByCategory(category = 'all'){
        if(category === 'all'){
            return this.data;
        }

        const isFeedBack = category === 'feedbacks';

        const filtered = this.data.filter(article => article.isFeedback === isFeedBack);

        return filtered;
    }
}