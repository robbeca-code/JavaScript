let result = document.querySelector('.result');
let num = prompt('Enter number');

if(num % 2 === 1){
    result.innerHTML = `${num}은 홀수입니다.`;
} else {
    result.innerHTML = `${num}은 짝수입니다.`;
}