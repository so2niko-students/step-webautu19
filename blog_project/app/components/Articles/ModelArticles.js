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

    constructor(){
        this.rowSize = this.cellHeaders.length;
    }

    loadArticles(){
        return fetch(this.link).then(r => r.json()).then(d =>{
            const preparedData = d.feed.entry.map(cell => cell.content.$t).slice(this.rowSize);

            preparedData.forEach((element, i) => {
                const id = Math.floor(i / this.rowSize);
                const name = i % this.rowSize;

                if(!this.data[id]){
                    this.data[id] = {};
                }

                this.data[id][this.cellHeaders[name]] = element;
            });

            return this.data;
        });
    }
}