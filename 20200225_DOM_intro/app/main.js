const p2 = document.querySelector('p:last-child');
console.log(p2);

// document.querySelector('.btn-change').oninput = function(){
document.querySelector('.inp').oninput = function(){
    document.querySelector('.txt.one').innerHTML = document.querySelector('.inp').value;
}