export class ViewArticles{
    constructor(){
        this.articles = document.querySelector('.atricles');
    }

    renderArticles(data){
        this.articles.innerHTML = data.map(d => this.articleString(d)).join('');
    }

    articleString({time, author, article, description, url}){
        return `<div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="${url}" class="card-img" alt="${article} image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${article}</h5>
              <h6>${author}</h6>
              <p class="card-text">${description}</p>
              <p class="card-text"><small class="text-muted">${time}</small></p>
            </div>
          </div>
        </div>
      </div>`;
    }
}