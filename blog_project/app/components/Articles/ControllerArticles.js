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
        
        this.view = new ViewArticles(
            this.handleSearch, 
            this.handleFilter,
            this.handleChooseDate,
            this.handleClickCategory
            );
        // 3 - использование стрелочной функции in function expression

        
        this.loadData();
    }

    loadData(){
        this.model.loadArticles()
            .then(data => {
                this.view.renderArticles(data);

                const authors = this.model.authorsArr;
                this.view.renderAuthors(authors);
                
                const dates = this.model.datesArr;
                this.view.renderDates(dates);
            });
    }

    handleSearch = () => {
        const search = this.view.searchVal;
        const data = this.model.getSearchedData(search);
        this.view.renderArticles(data);
    }

    handleFilter = (e) => {
        const authors = this.view.authorsCheck;
        console.log('I am in filter', authors);
        const filteredData = this.model.filterBy(authors);

        this.view.renderArticles(filteredData);
    }

    handleChooseDate = () => {
        const choosedDate = this.view.choosedDate;
        const filteredData = this.model.filterByDate(choosedDate);

        this.view.renderArticles(filteredData);
    }

    handleClickCategory = (ev) => {
        const category = ev.target.dataset.category;
        const filtered = this.model.filterByCategory(category);

        this.view.renderArticles(filtered);
    }
}