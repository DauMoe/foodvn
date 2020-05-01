let navbar = document.querySelector(".navbar");
let navLink = document.querySelectorAll('.nav-link');
let intro_content = document.querySelector(".wrapper>.content");
let intro = document.getElementById('intro');
let home = document.getElementById('home');
let blog = document.getElementById('blog');
let tip = document.getElementById('tip');
let eating = document.getElementById('eating');
let recipe = document.getElementById('recipes');
let contact = document.getElementById('contact');
let animateRecipes = document.querySelectorAll('.recipes');
let html = document.querySelector('html');
let loading = document.querySelector('.loading');

window.scrollTo(0, 0);
new WOW({
    offset: 250
}).init();
window.onload = () => {
    setInterval(() => {
        loading.classList.add('wow', 'hinge');
    }, 1000);
    
    setInterval(() => {
        loading.style.display = 'none';
        html.style.overflowY = 'auto';
    }, 2000);
}
navLinkActive = (index)=> {
    for (let i=4; i<navLink.length; i++) {
        if (i == index) {
            navLink[index].classList.add("active");
        } else {
            navLink[i].classList.remove("active");
        }        
    }
}

for (let i=0; i<animateRecipes.length; i++) {
    animateRecipes[i].classList.add('wow');
    if (i%2 == 0) {
        animateRecipes[i].classList.add('fadeInLeft');
    } else {
        animateRecipes[i].classList.add('fadeInRight');
    }
}
$('.carousel').carousel({
    interval:  2500
})

window.addEventListener('scroll', () => {
    if (home.getBoundingClientRect().y < 1) {
        navLinkActive(4);
    };
    if (intro.getBoundingClientRect().y < 1) {
        navLinkActive(5);
    };
    if (blog.getBoundingClientRect().y < 1) {
        navLinkActive(6);
    };
    if (tip.getBoundingClientRect().y < 1) {
        navLinkActive(7);
    };
    if (eating.getBoundingClientRect().y < 1) {
        navLinkActive(8);
    };
    if (recipe.getBoundingClientRect().y < 1) {
        navLinkActive(9);
    };
    if (Math.floor(contact.getBoundingClientRect().bottom) == window.innerHeight || contact.getBoundingClientRect().y < 0) {
        navLinkActive(10);
    };
})

