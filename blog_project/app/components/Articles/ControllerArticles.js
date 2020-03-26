import { ModelArticles } from "./ModelArticles.js";
import { ViewArticles } from "./ViewArticles.js";

export class ControllerArticles{
    constructor(){
        this.model = new ModelArticles();

        //Потеря контекста выполнения
        
        // this.view = new ViewArticles(()=> this.handleSearch());
        // 1 - использовать стрелочные функции
        
        // this.view = new ViewArticles(this.handleSearch.bind(this));
        // 2 - явная подстановка контекста
        
        this.view = new ViewArticles(this.handleSearch);
        // 3 - использование стрелочной функции in function expression

        
        this.loadData();
    }

    loadData(){
        this.model.loadArticles()
            .then(data => {
                this.view.renderArticles(data);
                const authors = this.model.authorsArr;
                this.view.renderAuthors(authors);
            });
    }

    handleSearch = () => {
        const search = this.view.searchVal;
        const data = this.model.getSearchedData(search);
        this.view.renderArticles(data);
    }
}