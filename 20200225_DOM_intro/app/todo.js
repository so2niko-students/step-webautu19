const el = {
    btn : document.querySelector('.btn-add'),
    inp : document.querySelector('.inp-task'),
    list : document.querySelector('.list'),
    tasks : []
}

el.btn.onclick = function(){
    const str = el.inp.value;
    //очистить input
    el.inp.value = '';
    if(str.length > 0){
        el.tasks.unshift(str);
        el.list.innerHTML = '';
        //дописываю в список новую задачу
        el.tasks.forEach(s=>{
            el.list.innerHTML += `<p>${s}</p>`;
        });        
    }    
}