let num = prompt('숫자를 입력하세요.', 10);
let numFact = 1;
let i = 2;

while(i <= num){
    numFact *= i;
    i++;
}

document.querySelector('.factorial').innerHTML = `${num}! = ${numFact}`;