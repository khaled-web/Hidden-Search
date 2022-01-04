const btn = document.querySelector('.btn');
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
 btn.classList.toggle('active-btn');
 input.classList.toggle('active-input')
})