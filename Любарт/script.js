'use strict';

//--------меню для телефона--------

let menuBurger = document.querySelector('.menu-burger');
let menuList = document.querySelector('.menu-list');
let body = document.querySelector('body');

menuBurger.onclick = function () {
    menuBurger.classList.toggle("active-menu");
    menuList.classList.toggle("active-menu");
    body.classList.toggle("lock");

}

//-------обработка формы---------

let form = document.querySelector('.form')
let validateBtn = form.querySelector('.button')
let fields = form.querySelectorAll('.field')


let generateError = function (text) {
    let error = document.createElement('div')
    error.className = 'error'
    error.innerHTML = text
    return error
}
var removeValidation = function () {
    var errors = form.querySelectorAll('.error')

    for (var i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
}

var checkFieldsPresence = function () {
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('Поле пустое', fields[i])
            var error = generateError('Необходимо заполнить поле!')
            form[i].parentElement.insertBefore(error, fields[i])
        }
    }
}


form.addEventListener('submit', function (event) {
    event.preventDefault()

    removeValidation();

    checkFieldsPresence();
    let findErr = form.querySelector('.error')

    if (findErr) {
        console.log('Есть ошибки')
    } else {
        console.log('ошибок нет!')
        form.submit();
    }
})

//------Появление элементов на странице при скролле-----------

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('elem-show');
        }
    });
}
let options = {
    threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.elem-animation');
for (let elm of elements) {
    observer.observe(elm);
}



//-------------Слайдер-----------------

let sldrList = document.querySelector('.slider');
let sldrElements = sldrList.querySelectorAll('.slide');
let sldrCurrentElem = sldrList.querySelector('.current-slide');
let sldrNextElem = sldrList.querySelector('.next-slide');
let sldrPrevElem = sldrList.querySelector('.prev-slide');
let leftArrow = sldrList.querySelector('div.left-button');
let rightArrow = sldrList.querySelector('div.right-button');
let i = 3;
let backLeftElem = sldrList.querySelector('.slide-back-left');
let backRightElem = sldrList.querySelector('.slide-back-right');

let rightClickSlider = document.querySelector('.right-button');
let leftClickSlider = document.querySelector('.left-button');


let autoScroll;
//-----интервал смены кадров слайдера
let interval = 2000;

let bgTime = getTime();

function getTime() {
    return new Date().getTime();
};


function movingLeft() {

    if (i < 0) {
        i = sldrElements.length - 1;
    }


    sldrPrevElem = sldrElements[i];


    if (i - 1 < 0) {
        sldrCurrentElem = sldrElements[sldrElements.length - 1];

    } else {
        sldrCurrentElem = sldrElements[i - 1];
    }

    if (i - 2 < 0) {

        sldrNextElem = sldrElements[sldrElements.length - 2 + i];

    } else {
        sldrNextElem = sldrElements[i - 2];

    }

    if (i + 2 == sldrElements.length) {

        backRightElem = sldrElements[0];

    } else if (i + 2 == sldrElements.length + 1) {
        backRightElem = sldrElements[1];
    } else {
        backRightElem = sldrElements[i + 2];

    }


    if (i + 1 > sldrElements.length - 1) {

        backLeftElem = sldrElements[0];
    } else {
        backLeftElem = sldrElements[i + 1];
    }

}


function movingRight() {

    if (i > sldrElements.length - 1) {
        i = 0;
    }

    sldrPrevElem = sldrElements[i];


    if (i - 1 < 0) {
        sldrCurrentElem = sldrElements[sldrElements.length - 1];

    } else {
        sldrCurrentElem = sldrElements[i - 1];
    }

    if (i - 2 < 0) {

        sldrNextElem = sldrElements[sldrElements.length - 2 + i];

    } else {
        sldrNextElem = sldrElements[i - 2];

    }

    if (i + 2 == sldrElements.length) {

        backRightElem = sldrElements[0];

    } else if (i + 2 == sldrElements.length + 1) {
        backRightElem = sldrElements[1];
    } else {
        backRightElem = sldrElements[i + 2];

    }


    if (i + 1 == sldrElements.length) {

        backLeftElem = sldrElements[0];
    } else {
        backLeftElem = sldrElements[i + 1];
    }


}

//----------изменение позиции слайдов

function newElementPosition(direction) {


    removeCurrentClass();

    if (direction == 'right') {


        movingRight();

    } else if (direction == 'left') {
        movingLeft();

    }


    setNewClass();



};
//---------остановка картинки при наведении


//sldrList.addEventListener('mouseenter', function() {clearInterval(autoScroll)}, false);
//		sldrList.addEventListener('mouseleave', setAutoScroll, false)
//	


//--------------авто прокрутка
function setAutoScroll() {
    autoScroll = setInterval(function () {
        let fnTime = getTime();
        if (fnTime - bgTime + 10 > interval) {
            bgTime = fnTime;
            i++;
            newElementPosition('right');

        }
         addAnimationRightButton();
setTimeout(removeAnimation,700);
    }, interval)
};
setAutoScroll();




//-------------------------при клике!
rightClickSlider.onclick = function () {
    let direction = 'right';

    let fnTime = getTime();
    if (fnTime - bgTime > 500) {
        bgTime = fnTime;
        i++;     
        
        clearInterval(autoScroll);
        newElementPosition(direction);
        addAnimationRightButton();
setTimeout(removeAnimation,700);

    }

};


leftClickSlider.onclick = function () {
    let direction = 'left';

    let fnTime = getTime();
    if (fnTime - bgTime > 500) {
        bgTime = fnTime;
        i--;
                
       clearInterval(autoScroll);

        newElementPosition(direction);
         addAnimationLeftButton();
 setTimeout(removeAnimation,700);

 
    }


};

function removeAnimation(){
         for(let slide of sldrElements){
            slide.style.animation = '';
        }
}

function addAnimationLeftButton(){
         sldrCurrentElem.style.animation = 'scaleIncrease .7s 1 ease-in-out, moveFromRightToCenter .7s 1 ease-in-out';
        sldrNextElem.style.animation = 'moveFromCenterToRight .7s 1 ease-in-out';
        sldrPrevElem.style.animation = 'scaleDecrease .7s 1 ease-in-out, moveFromCenterToLeft .7s 1 ease-in-out';
}

function addAnimationRightButton(){
         sldrCurrentElem.style.animation = 'scaleIncrease .7s 1 ease-in-out, moveFromLeftToCenter .7s 1 ease-in-out';
        sldrNextElem.style.animation = 'scaleDecrease .7s 1 ease-in-out, moveFromCenterToRight .7s 1 ease-in-out';
        sldrPrevElem.style.animation = 'moveFromCenterToLeft .7s 1 ease-in-out';
}

let removeCurrentClass = function () {

    sldrCurrentElem.classList.remove("current-slide");
    sldrPrevElem.classList.remove("prev-slide");
    sldrNextElem.classList.remove("next-slide");
    backLeftElem.classList.remove("invisible");
    backRightElem.classList.remove("invisible");
};

let setNewClass = function () {

    sldrCurrentElem.classList.add("current-slide");
    sldrPrevElem.classList.add("prev-slide");
    sldrNextElem.classList.add("next-slide");
    backLeftElem.classList.add("invisible");
    backRightElem.classList.add("invisible");
};
