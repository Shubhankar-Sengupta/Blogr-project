const anchors = document.querySelectorAll('a');
const li = document.querySelectorAll('.dropdown');
const img = document.querySelector('.alternate-img');
const img1 = document.querySelector('.alternate-img1');

for (let i of anchors) {
    i.addEventListener('click', (evt) => {
        evt.preventDefault();
    })
};


function defaultCheck() {

    if (window.innerWidth < 768) {
        img.src = 'file:///F:/FrontEndCodeChallege3/images/illustration-editor-mobile.svg';
        img1.src = 'file:///F:/FrontEndCodeChallege3/images/illustration-laptop-mobile.svg';
    }
    
    else {
        img.src = 'file:///F:/FrontEndCodeChallege3/images/illustration-editor-desktop.svg';
        img1.src = 'file:///F:/FrontEndCodeChallege3/images/illustration-laptop-desktop.svg';
    }
};


defaultCheck();


window.onresize = function checkWidthScreen() {
    defaultCheck();
};
