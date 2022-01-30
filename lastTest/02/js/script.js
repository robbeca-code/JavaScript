let count = 0;
let array = '';

for(let i=1; i<=100; i++){
    if(i % 3 !== 0) {
        continue;
    }            
    array += `${i}, `;
    count++;
}

document.querySelector('.group').innerHTML = array;
document.querySelector('.count').innerHTML = `3의 배수의 갯수 : ${count}`;