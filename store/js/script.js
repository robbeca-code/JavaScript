function loadItems() {
    return fetch('../data/data.json')
        .then(response => response.json())
        .then(json => json.items);
}

function displayItems(items) {
    let container = document.querySelector('.items');
    container.innerHTML = items.map(items => createHTMLString(items)).join('');

}

function createHTMLString(items) {
    return `
        <li>
            <img src="${items.image}" alt="${items.type} ${items.color}">
            <span>${items.type}, ${items.gender}, ${items.size}</span>
        </li>
    `;
}

function onButtonClick(event, item){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if(key == null || value == null) {
        return;
    }
    
    const filtered = item.filter(item => item[key] === value);
    displayItems(filtered);
}

function setEventListener(items) {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => displayItems(items));
    const buttons = document.querySelector('.nav');
    buttons.addEventListener('click', event => onButtonClick(event, items));
}



loadItems()
.then(items => {
    displayItems(items);
    setEventListener(items);
})