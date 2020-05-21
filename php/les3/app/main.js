function getInputs(className = 'inp', isVal = true){
    return [...document.querySelectorAll(`.${className}`)].reduce((acc, el) => {
        acc[el.dataset.id] = isVal? el.value: el;
        return acc;
    }, {});
}

document.querySelector('.form-api').addEventListener('submit', ev => {
    ev.preventDefault();
    const {a, b, s} = getInputs();
    const url = `/calc_api.php?a=${a}&b=${b}&s=${s}`;
    fetch(url).then(res => res.text()).then(str => {
        const answ = getInputs('answ', false);
        answ.a.innerHTML = a;
        answ.b.innerHTML = b;
        answ.s.innerHTML = s;
        answ.res.innerHTML = str;
    });
});


document.querySelector('.form-auth').addEventListener('submit', ev => {
    ev.preventDefault();
    const {login, password} = getInputs('inp-auth');
    const url = '/info.php';
    fetch(url, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json;charset=utf-8'
        },
        body : JSON.stringify({login, password})    
    })
});

