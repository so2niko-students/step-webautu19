export class ViewArticles{
    constructor(handleS){
        this.articles = document.querySelector('.atricles');
        this.inputSearch = document.querySelector('.inp-search');
        this.formSearch = document.querySelector('.form-search');
        this.listAuthors = document.querySelector('.authors');

        this.handleS = handleS;

        this.addListeners();
    }

    renderArticles(data){
        this.articles.innerHTML = data.map(d => this.articleString(d)).join('');
    }

    renderAuthors(data){
      this.listAuthors.innerHTML = data.map(a => this.authorString(a)).join('');
    }

    authorString(name){
      const id = this.randomId;
      console.log(id);
      return `<div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="${id}" value="${name}">
      <label class="form-check-label" for="${id}">${name}</label>
    </div>`;
    }

    get randomId(){
      return `r${Math.floor(Math.random() * 10000)}t${(new Date()).getTime()}`; 
    }

    articleString({time, author, article, description, url}){
        return `<div class="card mb-3" style="max-width: 440px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${url}" class="card-img" alt="${article} image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${article}</h5>
              <h6>${author}</h6>
              <p class="card-text">${description.slice(0,50)}...</p>
              <p class="card-text"><small class="text-muted">${time}</small></p>
            </div>
          </div>
        </div>
      </div>`;
    }

    addListeners(){
      this.formSearch.addEventListener('submit', e => e.preventDefault());
      this.inputSearch.addEventListener('input', this.handleS);
    }

    get searchVal(){
      return this.inputSearch.value;
    }
}