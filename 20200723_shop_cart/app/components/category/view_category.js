export default class ViewCategory{
    categoriesDOM = document.querySelector('.categories');

    constructor(handleClickCategory){
        this.categoriesDOM.addEventListener('click', handleClickCategory);
    }

    renderCategories(categories){
        let categoriesHTML = `<span data-category="all" class="categories_name">All</span>`;

        categoriesHTML += categories.map(cat => `<span data-category="${cat}" class="categories_name">${cat}</span>`).join('');
        
        this.categoriesDOM.innerHTML = categoriesHTML;
    }


}