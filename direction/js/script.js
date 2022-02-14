const clickBtn = document.querySelector('.click');
const closeBtn = document.querySelector('.close');
const deraction = document.querySelector('.deraction');

function showDirection() {
    clickBtn.classList.add('hidden');
    deraction.classList.remove('hidden');
    closeBtn.classList.remove('hidden');
}

function closeDirection() {
    clickBtn.classList.remove('hidden');
    deraction.classList.add('hidden');
    closeBtn.classList.add('hidden');
}

clickBtn.addEventListener('click', showDirection);
closeBtn.addEventListener('click', closeDirection);