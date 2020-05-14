const baseURL = window.location.protocol + '//' + window.location.host;
let homepage = document.querySelectorAll('.homepage');
let menu = document.querySelector('#blogmenu');
let blogmenu = document.querySelector('#burgermenu');

menu.addEventListener('click', () => {
    blogmenu.classList.toggle('showBlogMenu');
});

blogmenu.addEventListener('click', () => {
    blogmenu.classList.remove('showBlogMenu');
})

homepage[0].href = baseURL;
homepage[5].href = baseURL;
homepage[1].href = baseURL + '#blog';
homepage[2].href = baseURL + '#tip';
homepage[3].href = baseURL + '#eating';
homepage[4].href = baseURL + '#recipe';