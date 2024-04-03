// не совсем понял как это работает, но главное, что работает 

let nav = document.querySelector('#nav');
let navBtn = document.querySelector('#nav-btn');
let navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = "./img/icons/nav-open.svg";
    }
}

AOS.init();