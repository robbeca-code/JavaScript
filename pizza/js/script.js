let price = 24000;

let sideMenu = document.querySelectorAll('.check');
let total = document.querySelector('#total');
total.value = `${price}원`;

function calc(event) {
    let checked = event.target.checked;
    let value = event.target.value;
    if(checked == true) {
        price += parseInt(value);
    } else {
        price -= parseInt(value);
    }   
    total.value = `${price}원`;
}

for(let i=0; i<sideMenu.length; i++){
    sideMenu[i].addEventListener('click', calc);
}