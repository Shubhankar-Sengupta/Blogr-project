const anchors = document.querySelectorAll('a');
const img = document.querySelector('.alternate-img');
const img1 = document.querySelector('.alternate-img1');
const navbarToggle = document.querySelector('.navbar-toggler-icon');
const paragraph = document.querySelectorAll('.text-main-nav');
const specialAnchors = document.querySelectorAll('#navbarDropdownMenuLink');


for (let i of anchors) {
    i.addEventListener('click', evt => {
        evt.preventDefault(); // it prevents the default click event features.
    })
};


function defaultCheck() {

    if (window.innerWidth < 768) {
        img.src = './images/illustration-editor-mobile.svg';
        img1.src = './images/illustration-laptop-mobile.svg';
    }

    else {
        img.src = './images/illustration-editor-desktop.svg';
        img1.src = './images/illustration-laptop-desktop.svg';
    }
};


defaultCheck();


window.onresize = function checkWidthScreen() {
    defaultCheck();
};



specialAnchors.forEach((navLiAnchor) => {

    navLiAnchor.addEventListener('click', evt => {

        if (evt.target.classList.contains('nav-toggle-icon-move-sp') && evt.target.attributes[6].value === "true") evt.target.classList.remove('nav-toggle-icon-move-sp');

        else evt.target.classList.add('nav-toggle-icon-move-sp');

    });

});



// const main = new String("A new String object"); //  Main prototype object. which has a constructor String() function called with a new keyword to form an instance object of the class..

// console.log(typeof(main))