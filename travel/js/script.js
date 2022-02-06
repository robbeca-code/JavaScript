const form = document.querySelector('form');
const input = document.querySelector('.addForm__input');
const clickBtn = document.querySelector('.addForm__Button');
let lists = document.querySelector('.lists');
let itemList = [];

function removeList(e) {
    let removeBtn = e.target.parentElement;
    removeBtn.remove();    
}

function showList(itemList) {
    let li = document.createElement('li');    
    let span = document.createElement('span');
    let button = document.createElement('button');
    li.classList.add('lists__item');
    button.classList.add('close');

    for(let i=0; i<itemList.length; i++){
        span.innerHTML = itemList[i];        
        button.innerHTML = 'X';

        li.appendChild(span);
        li.appendChild(button);
        lists.appendChild(li);
    }

    button.addEventListener('click', removeList);
}

function addList(event) {
    event.preventDefault();

    let item = input.value;
        
    if (item!=='') {
        itemList.push(item);      
        input.value = '';
        input.focus();  
    }
    showList(itemList);
}

clickBtn.addEventListener('click', addList);