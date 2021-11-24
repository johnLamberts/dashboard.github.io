const btnDaily = document.querySelector('.js-btn-daily');
const btnWeekly = document.querySelector('.js-btn-weekly');
const btnMonthly = document.querySelector('.js-btn-monthly');

const daily = document.querySelectorAll('.js-daily');
const weekly = document.querySelectorAll('.js-weekly');
const monthly = document.querySelectorAll('.js-monthly');

btnDaily.addEventListener('click', () => {
    hideAll();
    removeActiveClasses();
    btnDaily.classList.add('active');
    daily.forEach(item => item.style.display = 'block');
});

btnWeekly.addEventListener('click', () => {
    hideAll();
    removeActiveClasses();
    btnWeekly.classList.add('active');
    weekly.forEach(item => item.style.display = 'block');
});

btnMonthly  .addEventListener('click', () => {
    hideAll();
    removeActiveClasses();
    btnMonthly.classList.add('active');
    monthly.forEach(item => item.style.display = 'block');
});





function hideAll() {
    daily.forEach(item => item.style.display = 'block');
    weekly.forEach(item => item.style.display = 'block');
    monthly.forEach(item => item.style.display = 'block');
}

function removeActiveClasses() {
    btnDaily.classList.remove('active');
    btnWeekly.classList.remove('active');
    btnMonthly.classList.remove('active');
}