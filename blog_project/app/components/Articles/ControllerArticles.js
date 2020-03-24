import { ModelArticles } from "./ModelArticles.js";
import { ViewArticles } from "./ViewArticles.js";

export class ControllerArticles{
    constructor(){
        this.model = new ModelArticles();
        this.view = new ViewArticles();

        this.model.loadArticles().then(data => this.view.renderArticles(data));
    }
}