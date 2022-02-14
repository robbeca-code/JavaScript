for(let i=1; i<10; i++){
    let ul = document.querySelector(`.gugudan${i}`);
    for(let j=1; j<10; j++){                
        let result = i * j;
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.innerText = `${i} X ${j} = ${result}`;
        li.appendChild(span);
        ul.appendChild(li);
    }
}