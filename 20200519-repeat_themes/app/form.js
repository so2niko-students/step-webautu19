(_ => document.querySelector('.feedback-form').addEventListener('submit', onSubmit))();

function onSubmit(ev){
    ev.preventDefault();
    const msgThanks = document.querySelector('.msg-thanks');

    const { inpEmail, inpName, inpOpinion } = ev.target.elements;

    const rEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const rName = /[a-zа-я]+/i;

    if(rEmail.test(inpEmail.value) && rName.test(inpName.value)){
        sendFeedback(inpName.value, inpEmail.value, inpOpinion.value);
        inpName.value = inpEmail.value = inpOpinion.value = '';
        msgThanks.classList.remove('d-none');
    }

    console.log(inpEmail, inpName, inpOpinion);
}

function sendFeedback(name, email, opinion){
    console.log(name, email, opinion);
}

