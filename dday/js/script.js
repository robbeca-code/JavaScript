let now = new Date();
let firstDate = new Date('2020-10-01');
let toNow = now.getTime();
let toFirst = firstDate.getTime();
let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime/(1000*60*60*24)); /* 1일 = 24시간*60분*60초*1000밀리초 */
const passedDate = document.querySelector('.header__dday');
passedDate.innerHTML = `${passedDay}일`;

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

function calcDate(days) {
    let furture = toFirst + days*(1000*60*60*24);
    let someday = new Date(furture);
    let year = someday.getFullYear();
    let month = someday.getMonth()+1;
    let date = someday.getDate();
    document.querySelector(`#date${days}`).innerHTML = `${year}년 ${month}월 ${date}일`;
}