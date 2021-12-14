/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelectorAll('.promo__adv img'),

 promoBg = document.querySelector('.promo__bg'),

 promoGenre = promoBg.querySelector('.promo__genre'),

 promoInteractiveList = document.querySelector('.promo__interactive-list');


promoAdv.forEach(item =>{
    item.remove();
});



promoGenre.textContent = 'драма';

promoBg.style.backgroundImage = 'url("img/bg.jpg")';

promoInteractiveList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((item,index)=>{
promoInteractiveList.innerHTML += `
    <li class="promo__interactive-item">${index+1} ${item}
        <div class="delete"></div>
    </li>
`   
});


// for(let i = 0; i<movieDB.movies.length;i++){

//     let link = document.createElement('li');
//     let del = document.createElement('div');
//     link.classList.add('promo__interactive-item');
//     del.classList.add('delete');
//     link.innerHTML = `${i+1} ${movieDB.movies[i]}`;
//     promoInteractiveList.append(link);
//     promoInteractiveList.append(del);
// }


