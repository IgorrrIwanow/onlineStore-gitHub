let text = document.querySelector('.text');
let btn = document.querySelector('.btn');

btn.addEventListener('click', ()=> {
//    text.textContent = text.textContent.replace(/'/g, '"');
text.textContent = text.textContent.replace(/\B'|'\B/g, '"');
});

