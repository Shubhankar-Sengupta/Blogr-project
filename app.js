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


function toggle(evt) {

    evt.target.classList.toggle('toggle-img');

    for (let para of paragraph) {
        para.classList.toggle('hidden');
    }

}


navbarToggle.addEventListener('click', toggle);


specialAnchors.forEach((navLiAnchor) => {
    navLiAnchor.addEventListener('click', evt => {

        navLiAnchor.classList.toggle('nav-toggle-icon-move-sp');
    })

})