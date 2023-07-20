const loader = document.querySelector('#preloader');
gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', function () {
    loader.style.display = "none"

    const main_tl = gsap.timeline();
    main_tl .to('.hidetext', 1, {y : "100%", stagger : 0.5, ease: "power2.inOut"})
        .fromTo('.hide-p', 0.8, {opacity : 0}, { opacity : 1, ease: "power2.inOut"})
        .fromTo('.wrapper_text_button', 0.8, {opacity : 0}, { opacity : 1, ease: "power2.inOut"})
        .fromTo('.wrapper_img', 0.8, {opacity : 0}, { opacity : 1, ease: "power2.inOut"});

    
   
})


const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});




