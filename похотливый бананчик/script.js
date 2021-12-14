const banana = document.getElementById('banana');

banana.onclick = function(){
    console.log('Моргаем');
    if(!banana.classList.contains('blinking')){
        banana.classList.add('blinking');
    }
    if(banana.classList.contains('blinking')){
    setTimeout(() => {
        banana.classList.remove('blinking');
    }, 1200);
    }
};
