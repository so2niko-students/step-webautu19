const ctxMenu = {
    link : document.querySelector('.ctx-menu'),
    isShow : false
};

function onBodyClickCtxMenu(ev){
    ev.preventDefault();
    const hide = 'd-none';
    const PX = 'PX';

    ctxMenu.link.style.left = ev.clientX + PX;
    ctxMenu.link.style.top = ev.clientY + PX;

    ctxMenu.isShow = true;
    ctxMenu.link.classList.remove(hide);
}

function onBodyClick(){
    const hide = 'd-none';

    if(ctxMenu.isShow){
        ctxMenu.link.classList.add(hide);
        ctxMenu.isShow = false;
    }    
}

document.body.addEventListener('contextmenu', onBodyClickCtxMenu);
document.body.addEventListener('click', onBodyClick);