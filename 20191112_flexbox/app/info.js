function info(){
    links.infoBlock.innerText = `width : ${links.example.clientWidth}`;
}

const links = {
    infoBlock : document.querySelector('.info'),
    example : document.querySelector('.example')
}
setInterval(info, 1000);