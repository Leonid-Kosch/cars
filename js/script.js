function navOpen(){
    let hamburger = document.querySelector('.hamburger');
    let navLinks = document.querySelector('.nav__links');
    let body = document.querySelector('body');
    let menuLinks = document.querySelectorAll('.nav__links a');
    hamburger.onclick = function() {
        hamburger.classList.toggle('hamburger_active');
        navLinks.classList.toggle('nav__links_active');
        body.classList.toggle('scroll_none');
    };
    menuLinks.forEach(function (navLink){
        navLink.onclick = function() {
            hamburger.classList.remove('hamburger_active');
            navLinks.classList.remove('nav__links_active');
            body.classList.remove('scroll_none');
        };
    });
};
navOpen();