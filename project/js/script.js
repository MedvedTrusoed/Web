        /* Задания на урок:

        1) Удалить все рекламные блоки со страницы (правая часть сайта)

        2) Изменить жанр фильма, поменять "комедия" на "драма"

        3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
        Реализовать только при помощи JS

        4) Список фильмов на странице сформировать на основании данных из этого JS файла.
        Отсортировать их по алфавиту 

        5) Добавить нумерацию выведенных фильмов */

        'use strict';

        document.addEventListener('DOMContentLoaded',()=>{
            
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
            
            promoInteractiveList = document.querySelector('.promo__interactive-list'),
            
            form = document.querySelector('.add'),
            
            addingInput = form.querySelector('.adding__input'),
            
            checkbox = form.querySelector('[type="checkbox"]');
            
            
            const deleteAdv = (adv)=>{
                adv.forEach(item =>{
                    item.remove();
                });
            };
            
            
            const changeOnPAge = ()=>{
                promoGenre.textContent = 'драма';
            
                promoBg.style.backgroundImage = 'url("img/bg.jpg")';
                
            };
            
            function sort (films){

                films.sort();
            }

            
            
            
            // for(let i = 0; i<movieDB.movies.length;i++){
            
            //     let link = document.createElement('li');
            //     let del = document.createElement('div');
            //     link.classList.add('promo__interactive-item');
            //     del.classList.add('delete');
            //     link.innerHTML = `${i+1} ${movieDB.movies[i]}`;
            //     promoInteractiveList.append(link);
            //     promoInteractiveList.append(del);
            // }
            
            
    
            function displayFilms (){
                promoInteractiveList.innerHTML = '';
                sort(movieDB.movies);
                movieDB.movies.forEach((item,index)=>{
                    promoInteractiveList.innerHTML += `
                        <li class="promo__interactive-item">${index+1} ${item}
                            <div class="delete"></div>
                        </li>
                    `   
                    });
                
                    document.querySelectorAll('.delete').forEach((element,index)=>{
                        element.addEventListener('click',()=>{
                            
                        element.parentElement.remove();
                        
                        movieDB.movies.splice(index,1);
                        displayFilms();  
                        });
                        });
                    
            }

            form.addEventListener('submit',(e)=>{
                e.preventDefault();

                let newFilm = addingInput.value;
                if(newFilm){
                    if(checkbox.checked){
                        console.log("Добавляем любимый фильм");
                    }
                    if(newFilm.length > 21){
                        newFilm = `${newFilm.substring(0,20)}...`;
                    }
                    movieDB.movies.push(newFilm); 
                                
                    displayFilms ();
                    
                }
                e.target.reset();
            });
            
            displayFilms ();

            deleteAdv(promoAdv);
            
            changeOnPAge();
                 
            
        });