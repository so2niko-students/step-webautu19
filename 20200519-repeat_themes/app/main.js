const ctxMenu = {
    container : document.querySelector('.ctx-menu-container'),
    isShow : false
};

function onBodyClickCtxMenu(ev){
    ev.preventDefault();

    //? Вариант с удалением с body
    // if(ctxMenu.isShow){
    //     const prevCtx = document.querySelector('.ctx-menu');
    //     document.body.removeChild(prevCtx);
    // }   

    ctxMenu.container.innerHTML = `
    <div class="w-200 pos-fix ctx-menu" 
        style="top: ${ev.clientY}px; left: ${ev.clientX}px">
        <ul class="list-group user-select-none">
            <li class="list-group-item p-1 pl-2"><i class="fas fa-folder-plus"></i> Создать папку</li>
            <li class="list-group-item p-1 pl-2"><i class="fas fa-file-upload"></i> Загрузка файлов</li>
            <li class="list-group-item p-1 pl-2"><i class="fas fa-folder-open"></i> Загрузить папку</li>
            <li class="list-group-item p-1 pl-2"><i class="fas fa-file-word"></i> Google Документы</li>
            <li class="list-group-item p-1 pl-2"><i class="fas fa-file-excel"></i> Google Таблицы</li>
            <li class="list-group-item p-1 pl-2"><i class="fas fa-file-powerpoint"></i> Google Презентации</li>
            <li class="list-group-item p-1 pl-2">Ещё</li>
        </ul>
    </div>`;

    ctxMenu.isShow = true;
}

function onBodyClick(){
    if(ctxMenu.isShow){
        ctxMenu.container.innerHTML = '';
        ctxMenu.isShow = false;
    }    
}

(_ => {
    document.body.addEventListener('contextmenu', onBodyClickCtxMenu);
    document.body.addEventListener('click', onBodyClick);
})();
