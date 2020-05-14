const baseURL = window.location.protocol + '//' + window.location.host;
let eating_href = document.querySelectorAll('.slide-header');

eating_href.forEach(item => {
    item.href = baseURL + '/blog.html';
})    