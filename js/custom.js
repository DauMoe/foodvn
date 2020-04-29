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
// let loading = document.querySelector('.loading');

window.scrollTo(0, 0);
new WOW({
    offset: 250
}).init();
window.onload = () => {
    // setInterval(() => {
    //     loading.classList.add('wow', 'hinge');
    // }, 1000);
    
    // setInterval(() => {
    //     loading.style.display = 'none';
    //     html.style.overflow = 'auto';
    // }, 2000);
}
navLinkActive = (index)=> {
    for (let i=0; i<navLink.length; i++) {
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
// $('.carousel').carousel({
//     interval:  2500
// })

window.addEventListener('scroll', () => {
    if (window.pageYOffset > window.innerHeight*0.8) {
        navbar.classList.add('bg-light');
    } else {
        navbar.classList.remove('bg-light');
    }

    if (home.getBoundingClientRect().y < 0 && home.getBoundingClientRect().y > 0-window.innerHeight*0.8) {
        navLinkActive(0);
    } else if (intro.getBoundingClientRect().y < 0 && intro.getBoundingClientRect().y > 0-window.innerHeight*0.5) {
        navLinkActive(1);
    } else if (blog.getBoundingClientRect().y < 0 && blog.getBoundingClientRect().y > 0-window.innerHeight*0.5) {
        navLinkActive(2);
    } else if (tip.getBoundingClientRect().y < 0 && tip.getBoundingClientRect().y > 0-window.innerHeight*0.5) {
        navLinkActive(3);
    } else if (eating.getBoundingClientRect().y < 0 && eating.getBoundingClientRect().y > 0-window.innerHeight*0.5) {
        navLinkActive(4);
    } else if (recipe.getBoundingClientRect().y < 0 && recipe.getBoundingClientRect().y > 0-window.innerHeight*0.5) {
        navLinkActive(5);
    }
})

