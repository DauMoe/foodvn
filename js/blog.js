const baseURL = window.location.protocol + '//' + window.location.host;
let homepage = document.querySelectorAll('.homepage');
let menu = document.querySelector('#blogmenu');
let blogmenu = document.querySelector('#burgermenu');

menu.addEventListener('click', () => {
    blogmenu.classList.toggle('showBlogMenu');
});

homepage.forEach(element => {
    element.href = baseURL
});