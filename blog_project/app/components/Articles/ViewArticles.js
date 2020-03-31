export class ViewArticles{
    constructor(handleS, handleF, handleD, handleC){
        this.articles = document.querySelector('.atricles');
        this.inputSearch = document.querySelector('.inp-search');
        this.formSearch = document.querySelector('.form-search');
        this.listAuthors = document.querySelector('.authors');
        this.selectDates = document.querySelector('.select-dates');
        this.tabsCategories = document.querySelectorAll('.tabs-categories');
        

        this.handleS = handleS;
        this.handleF = handleF;
        this.handleD = handleD;
        this.handleC = handleC;

        this.addListeners();
    }

    addListeners(){
      this.formSearch.addEventListener('submit', e => e.preventDefault());
      this.inputSearch.addEventListener('input', this.handleS);

      //add listener on author field(filter by author)
      this.listAuthors.addEventListener('click', this.handleF);

      this.selectDates.addEventListener('input', this.handleD);  

      this.tabsCategories.forEach(tab => tab.addEventListener('click', this.handleC));     
    }

    renderDates(arr){
      this.selectDates.innerHTML = `
        <option value="">Choose a date</option>
        ${arr.map(d => this.datesString(d)).join('')}`;
    }

    renderArticles(data){
      this.articles.innerHTML = data.map(d => {
        return d.isFeedback? this.feedBackString(d): this.articleString(d);      
      }).join('');
    }

    //render all input elements of authors
    renderAuthors(data){
      this.listAuthors.innerHTML = data.map(a => this.authorString(a)).join('');
      this.inputsAuthors = [...document.querySelectorAll('.inp-author-check')];
    }

    authorString(name){
      const id = this.randomId;
      console.log(id);
      return `<div class="form-check form-check-inline">
      <input class="form-check-input inp-author-check" type="checkbox" id="${id}" value="${name}">
      <label class="form-check-label" for="${id}">${name}</label>
    </div>`;
    }

    feedBackString({time, author, article, description}){
      return `<div class="card m-3 text-white bg-dark" style="max-width: 440px;">
      <div class="row no-gutters">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              ${article}
            </h5>
            <h6>${author}</h6>
            <p class="card-text"><small class="text-white">${time}</small> </p>
            <p class="card-text">${description.slice(0,50)}</p>
          </div>
        </div>
      </div>
    </div>`;
    }

    articleString({time, author, article, description, url}){
        return `<div class="card m-3 bg-light" style="max-width: 440px;">
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

    datesString(date){
      return `<option value="${date}">${date}</option>`;
    }


    get randomId(){
      return `r${Math.floor(Math.random() * 10000)}t${(new Date()).getTime()}`; 
    }

    get searchVal(){
      return this.inputSearch.value;
    }

    get authorsCheck(){
      //Receive array of filtered input elements(checked)
      const filteredInputs = this.inputsAuthors.filter(el => el.checked);
      //receive array of authors names(string type)
      const arrAuthors = filteredInputs.map(el => el.value);

      return arrAuthors;
    }

    get choosedDate(){
      return this.selectDates.value;
    }
}