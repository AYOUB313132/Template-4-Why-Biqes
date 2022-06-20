/*================ Show And Hide Menu ================*/
let navTogle = document.getElementById("nav-togle");
let navClose = document.getElementById("nav-close");
let navMenu = document.getElementById("nav-menu");

// Show

if(navTogle){
    navTogle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
// Hide
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
// remove menu mobile
let navLink = document.querySelectorAll("#nav-link");

function linkAction () {
    navMenu.classList.remove("show-menu");
};
navLink.forEach(n => n.addEventListener("click", linkAction));

/*============== scroll top ================*/
let buttonTop = document.getElementById("top")

buttonTop.onclick = function () {
    document.body.scrollTo = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrome & firefox & internet explorer & opera
}

/*================ scroll Animation ==================*/
//top
const scrollAnimation = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});
scrollAnimation.reveal('.text-slider, .article-news, .img-about', {origin: 'left'});
scrollAnimation.reveal('.article-event, .img-slider, .text-about', {origin: 'right'});
scrollAnimation.reveal('.info', {interval: 100});
scrollAnimation.reveal('.footer', {origin: 'bottom', interval: 100});

/*===== MENU Form =====*/
const linkLogin = document.querySelector('.link-login'),
      formLogin = document.getElementById('login'),
      closeForm = document.getElementById('close-login');


/* Validate if constant exists */
if(linkLogin){
    linkLogin.addEventListener('click', () =>{
        formLogin.classList.add('show-form')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(closeForm){
    closeForm.addEventListener('click', () =>{
        formLogin.classList.remove('show-form')
    })
}
