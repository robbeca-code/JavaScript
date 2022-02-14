let num = 10;
let sum = 0;

for(let i=1; i<=num; i++){
    if(i % 2 === 1){
        continue;
    }
    sum += i;

    document.querySelector('.even').innerHTML = `${i} ----------- ${sum}  <br>`;
}