const item = document.querySelectorAll('.item');
const activeBar = document.querySelector('.active-bar');

function handelActiveBar(el) {
    activeBar.style.width = `${el.offsetWidth}px`;
    activeBar.style.left = `${el.offsetLeft}px`;
}
