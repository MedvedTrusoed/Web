'use strict';

//Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращаетnull.

//let favoritAnime = prompt('Твое любимое аниме?', 'Наруто');
//alert(`Твое любимое аниме - ${favoritAnime}`);//Наклонные кавычки


//let cat = new Object();
//
//cat.name = "Василий";
//
//console.log("Имя котика - ", cat.name);
//
//let user = {
//    name:"Ирина",
//    age:24
//};
//user.isAdmin = false;
//
////for(let prop in user){
////    alert(prop);
////    alert(user[prop])
////}
//
//console.log("Имя пользователя: ", user.name,"\t","Возраст: ", user.age);
//

//let key = prompt("Что вы хотите узнать о пользователе?", "name");
//
//// доступ к свойству через переменную
//alert( user[key] ); // John (если ввели "name")
//alert( user["age"] );
//alert( user.name );
//for (let i = 0; i < 5; i++) {
//  console.log("value,", i);
//}


//----------------------------ОПЕРАТОР NEW-------------------

//Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
//
//read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
//sum() возвращает сумму введённых свойств.
//mul() возвращает произведение введённых свойств.
//Например:
//function Calculator() {
// 
//    this.read = function(){
//         this.num1 = +prompt("Введи первое значение","0");
//         this.num2 = +prompt("Введи второе значение","0");
//    };
//    this.sum = function(){
//       
//        return this.num1+this.num2;
//    };
//       this.mul = function(){
//      
//        return this.num1*this.num2;
//    };
//}
//
//
//let calculator = new Calculator();
//calculator.read();
//
//alert( `Sum=  ${calculator.sum()} `);
//alert( "Mul=" + calculator.mul() );


//-----------------------------------------------------------------------
//function Accumulator (startingValue) {
//
//    this.value = startingValue;
//    this.read = function(){
//        this.value += +prompt("Введите число",0);
//    }
//}
//
//
//let accumulator = new Accumulator(1); // начальное значение 1
//
//accumulator.read(); // прибавит ввод prompt к текущему значению
//accumulator.read(); // прибавит ввод prompt к текущему значению
//
//alert(accumulator.value); // выведет сумму этих значений

//--------------------- СТРОКИ-------------------------------
//Проверка на спам
//function checkSpam(str){
//    let target1 = 'viagra';
//    let target2 = 'xxx';
//    str = str.toLowerCase();
//    return str.includes(target1)|| str.includes(target2);
//
//}
//
//alert(checkSpam('buy ViAgRA now'));
//alert(checkSpam('free xxxxx'));
//alert(checkSpam("innocent rabbit"));
//alert(checkSpam("Govno"));
//alert(checkSpam("Pidr"));

//Усечение строки

//function truncate(str, maxlength){
//    
//    if(str.length > maxlength){
//        str = str.slice(0, maxlength - 1) +'…';
//    }
//    return str;
//}
//
//alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
//
//alert(truncate("Всем привет!", 20));

//Выделить число
//
//function extractCurrencyValue(str){
//    return +str.slice(1);
//}
//alert( extractCurrencyValue('$120') === 120 ); // true

//--------------------- МАССИВЫ-------------------------------


//let styles = ['Джаз','Блюз'];
//styles.push('Рок-н-Ролл');
//styles[Math.floor(styles.length - 1/2)] = 'Классика';
//alert(styles.shift(1));
//styles.unshift('Рэп','Рэгги');


//function sumInput() {
//
//  let numbers = [];
//
//  while (true) {
//
//    let value = prompt("Введите число", 0);
//
//    // Прекращаем ввод?
//    if (value === "" || value === null || !isFinite(value)) break;
//
//    numbers.push(+value);
//  }
//
//  let sum = 0;
//  for (let number of numbers) {
//    sum += number;
//  }
//  return sum;
//}
//
//alert( sumInput() );


//function camelize(str) {
//  return str
//    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//    .map(
//      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//    )
//    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//}
//alert(camelize("background-color")); 
//alert(camelize("list-style-image")); 
//alert(camelize("-webkit-transition"));

//function filterRange(arr, a, b){
//   let min,max;
//    if(a<b){
//        min = a;
//        max = b;
//    }else{
//        min = b;
//        max = a;
//    }
//   
//    return arr.filter(item => item>=min && item<=max);
//    
//}
//
//let arr = [5, 3, 8, 1];
//
//let filtered = filterRange(arr, 1, 4);
//
//alert( filtered ); // 3,1 (совпадающие значения)
//
//alert( arr ); // 5,3,8,1 (без изменений)


//function filterRangeInPlace(arr, a, b) {
//
//  for (let i = 0; i < arr.length; i++) {
//    let val = arr[i];
//
//    // удалить, если за пределами интервала
//    if (val < a || val > b) {
//      arr.splice(i, 1);
//      i--;
//    }
//  }
//
//}
//
//let arr = [5, 3, 8, 1];
//
//filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
//
//alert( arr ); // [3, 1]



//let arr = [5, 2, 1, -10, 8];
//
//arr.sort((a,b)=> b - a);
//
//
//alert( arr ); // 8, 5, 2, 1, -10


//let arr = ["HTML", "JavaScript", "CSS"];
//
//function copySorted(arr){
//    let newArray = [];
//     for(let i = 0;i<arr.length;i++){
//         newArray[i] = arr[i];
//    }
//     return newArray.sort();
//}
//let sorted = copySorted(arr);
//
//alert( sorted ); // CSS, HTML, JavaScript
//alert( arr ); // HTML, JavaScript, CSS (без изменений)



// -------------------- MAP SET-------------------


//Уникальные значения в массиве
//function unique(arr) {
//  let setUnic = new Set();
//    for( let item=0;item<arr.length;item++){
//    setUnic.add(arr[item]);
//    }
//    return Array.from(setUnic);
//}
//
//let values = ["Hare", "Krishna", "Hare", "Krishna",
//  "Krishna", "Krishna", "Hare", "Hare", ":-O"
//];
//
//alert( unique(values) ); // Hare,Krishna,:-O


//-------------------------Рекурсия---------------------

//
//function pow(num,degree){
//    if(degree==1){
//        return num
//    }else return num*pow(num,degree-1)
//}
//
//let answer = pow(2,4)
//console.log(answer)


//function sumTo(n){
//    let sum = 0;
//    for(let i = 0;i<=n;i++){
//        sum+=i;
//    }
//    return sum;
//}
//
//function sumToRec(n){
//    let sum = 0;
//   if(n == 1){
//    return n;
//   }else{
//       return n + sumToRec(n-1);
//   }
//}
//
//alert(sumTo(100));
//alert(sumToRec(100));


//----------------SetTimeout--------------------------
//function printNumbers(from, to) {
//    let numb = from;
//
//    setTimeout(function func(){
//       alert(numb);
//        if(numb<to){
//            setTimeout(func,1000);// Планирует следующий вызов после окончания предыдущего
//        }
//        numb++;
//    },1000)
//
//
//}
//
//printNumbers(1,5);

//
//function printNumbers(from, to) {
//    let numb = from;
//
//    let timerId = setInterval(()=>{
//       // alert(numb);
//        console.log(numb)
//        if(numb==to){
//           clearInterval(timerId)
//        }
//        numb++;
//    },1000)
//
//
//}
//
//printNumbers(1,5);


//--------------Классы--------------------


//class Clock {
//  constructor({ template }) {
//    this.template = template;
//  }
//
//  render() {
//    let date = new Date();
//
//    let hours = date.getHours();
//    if (hours < 10) hours = '0' + hours;
//
//    let mins = date.getMinutes();
//    if (mins < 10) mins = '0' + mins;
//
//    let secs = date.getSeconds();
//    if (secs < 10) secs = '0' + secs;
//
//    let output = this.template
//      .replace('h', hours)
//      .replace('m', mins)
//      .replace('s', secs);
//
//    console.log(output);
//  }
//
//  stop() {
//    clearInterval(this.timer);
//  }
//
//  start() {
//    this.render();
//    this.timer = setInterval(() => this.render(), 1000);
//  }
//}
//
//class ExtendedClock extends Clock{
//    constructor(options){
//        super(options);
//        let {precision = 1000} = options;
//        this.precision = precision;
//    }
//    start() {
//    this.render();
//    this.timer = setInterval(() => this.render(), this.precision);
//  }
//}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!НЕ работает чета
//let button = document.querySelector('.button');
//
//
//button.onclick = function() {
//    button.classList.add('animate')
//
// };

//console.log(button.classList)





//--------------------------DOM ДЕРЕВО-------------------------------

//document.body.style.backgroundColor='red' //сделает цвет body красным
//
//setTimeout(()=>{
//    document.body.style.backgroundColor=''; //вернет цвет назад через секунду
//},1000)

//for(let i of document.body.childNodes){
//    console.log(i)
//}
//
//for(let child of document.body.children){
//    console.log(child)
//}


//document.body.children[0] // document.body.firstChild
//document.body.lastElementChild.lastElementChild

//let elements = document.querySelectorAll('ul>li:last-child');
//console.log(elements)

//let elements = document.querySelectorAll('li');
//console.log(elements)
//let elements = document.querySelector('.intro');
//console.log(elements)

//document.querySelectorAll('#age-table label')  Поиск внутри тега с id age-table всех тегов lable

//document.querySelector('form[name="search"]')

//let inputs = form.querySelectorAll('input') // найти все input
//inputs[inputs.length-1] // взять последний

//document.querySelector('div[class="intro"]') или например form[name="search"]


//let list = document.querySelectorAll('ul>li')
//console.log(list)
//for(let item of list){
//    console.log(item)
//}
//for(let item of list){
//    console.log(item.textContent)
//}
//for(let item of list){
//    console.log(item.innerHTML)
//}
//for(let item of list){
//    console.log(item.outerHTML)
//}
//for (let li of document.querySelectorAll('li')) {
//  let title = li.firstChild.data;
//console.log(title)
//  // переменная title содержит текст элемента <li>
//}

//console.log(list.length)   //Количество элементов в ли
let intro = document.querySelector('.intro');
//intro.className = 'lox'  заменяет имя всех классов
//intro.classList.add('mocha')
//intro.classList.remove('intro')
//intro.classList.toggle('mocha') //добавить класс если его нет, удалить если есть
//console.log(intro.classList.contains('intro'))
//console.log(intro)
//intro.style.background='#555'
//intro.style.background=''
//let computedStyle = getComputedStyle(intro)
//console.log(computedStyle.background)
//intro.onclick = function(){
//    alert('Спасибо, что живой')
//}
//intro.onclick = null\
//let f1 = function(){alert('Ты мой любимый')}
//let f2 = ()=>alert('лошпедик')
//intro.addEventListener('click',f1)
//intro.addEventListener('click',f2)
//intro.removeEventListener('click',f1)

let button = document.querySelector('.button')
let hideFunction = function () {
    if (document.querySelector('.main_header').hidden == true) {
        document.querySelector('.main_header').hidden = false;
    } else document.querySelector('.main_header').hidden = true;

}



button.addEventListener('click', hideFunction)

//button.onclick = function(){button.hidden = true;}



//---------коллбэк обработчик
//строки шаблона
//json.strignify()

const arrayNumbers = [2, 2, 2, 6, 6, 3, 5, 9, 8, 9, 8, 8, 1, 2];
const n = 10;
//function calculateNumber (arrayNumbers,i){
//    return arrayNumbers.length/(i+1);
//}
//for(let i = 0;i<n;i++){
//    arrayNumbers.push(calculateNumber(arrayNumbers,i));
//}

//Отсортировать массив по убыванию

//arrayNumbers.sort((a,b)=>b-a);

//arrayNumbers.sort((a,b)=>b-a);

//Убрать дубрирующиеся элементы
//1 
// let arrayWithoutRepeat = new Set();
//
//arrayNumbers.forEach((item)=>{
//    arrayWithoutRepeat.add(item);
//});
//arrayWithoutRepeat = Array.from(arrayWithoutRepeat);
//
//console.log(arrayWithoutRepeat);


//1.1  короткая запись
//let newArr = Array.from(new Set(...[arrayNumbers]))


//2
//let arrayWithoutRepeats = [];
//arrayWithoutRepeats.push(arrayNumbers[0]);
//
//
//for (let i = 0; i < arrayNumbers.length; i++) {
//
//     for (let j = 0; j < arrayWithoutRepeats.length ; j++) {
//        
//        if(arrayWithoutRepeats[j]==arrayNumbers[i]){
//            break;
//
//        }
//         else if(j==arrayWithoutRepeats.length-1){
//         arrayWithoutRepeats.push(arrayNumbers[i]);
//         }
//
//}
//}
//
//const arr = [{
//    term: '10.12.2021'
//}, {
//    term: '01.02.2022'
//}, {
//    term: '23.02.2016'
//}, {
//    term: '21.10.2000'
//}];
//
//let result = [...arr]; // отсортированный результат
//
//let data = [];
//let year = 2;
//let mounth = 1;
//let day = 0;
//
//result.sort((a, b) => {
//    
//    let x = a.term.split('.')[2];
//    let y = b.term.split('.')[2];
//     if(x>y){
//         return 1;
//     }else {
//         return -1;
//     }
//  
//});
//
//for (let i = 0; i < arr.length; i++) {
//    data.push(arr[i].term.split('.'));
//
//}
//
//function swap(arr, i, j) {
//
//    let temp = arr[i];
//    arr[i] = arr[j];
//    arr[j] = temp;
//}
//
//
//for (let i = 0; i < 3; i++) {
//
//    for (let j = 0; j < 3 - i; j++) {
//
//        if (data[j][year] > data[j + 1][year]) {
//
//            swap(data, j, j + 1);
//            swap(result, j, j + 1);
//
//        } else if ((data[j][year] === data[j + 1][year]) && (data[j][mounth] > data[j + 1][mounth])) {
//
//            swap(data, j, j + 1);
//            swap(result, j, j + 1);
//        } else if ((data[j][year] === data[j + 1][year]) && (data[j][mounth] === data[j + 1][mounth]) && (data[j][day] > data[j + 1][day])) {
//
//            swap(data, j, j + 1);
//            swap(result, j, j + 1);
//        }
//    }
//
//}
//console.log(result);


//Допиши функцию sumCubeRoots, которая возвращает сумму кубических корней 
//для всех нечетных чисел массива целых чисел

//const sumCubeRoots = (_arr) => {
//    let sum = 0;
//_arr.forEach((item)=>{
//    if(item%2!==0){
//        sum+=Math.pow(item,1/3); 
//    }
//});
//    return sum;
//};
//
////const arr = [1, 8, 10, 0, 27, 2, 1]; // Входной массив
//let arr = new Array(1,8, 10, 0, 27, 2, 1);
//
//
//
//console.log(sumCubeRoots(arr)); // 5
//

// Коллбэк функция - это функция которая вызывает другую функцию
//function sayHi(callback){
//    
//    callback();
//}
//function sayMew(){
//    console.log('Pet says:Mew')
//}
//sayHi(sayMew);

//
//let arrayToys = ['Car','Bunny','Bear','Pinguin','Cube'];
//let header = document.getElementsByClassName('main_header')[0];
//
//let menu = document.querySelector('.menu_ul');
//
////let childrensMenu = menu.childNodes;
////
////let firstChildMenu = menu.firstChild;
////let lastChildMenu = menu.lastChild;
////
//
//
//let paragraph = document.createElement('p');
//
//paragraph.className = 'toys';
//paragraph.innerHTML = '<b>Игрушки: </b>'
//
//header.before(paragraph);
//
//arrayToys.forEach((item)=>{
//
//    paragraph.innerHTML += `<br>${item}`;
//
//});
//
//let newArrayToys = arrayToys.map((item)=>{
//    if(item.length > 4){
//        return item.toUpperCase();
//    }else
//    return item.toLowerCase();});
//
////console.log(newArrayToys);
//let strNewArrayToys = newArrayToys.join(' ');
//
//let backToArray = strNewArrayToys.split(' ');
// backToArray.splice(0,0,'UNICORN');
//let copyBackToArray = backToArray.slice();
//
////console.log(copyBackToArray );
//
//let reduceArray = copyBackToArray.reduce((acc,item)=>{
//    return acc + item.length;
//},0);
//
//console.log(reduceArray );
//
//paragraph.innerHTML = strNewArrayToys;



// Пересечение массивов


//let arr1 = [1,2,3,4];
//let arr2 = [3,4,5,6];
//
//function intersection(first,second){
//    let result = [];
////   for(let i=0;i<arr1.length;i++){
////       for(let j=0;j<arr2.length;j++){
////           if(arr1[i]===arr2[j]){
////               result.push(arr1[i]);
////           }
////       }
////   }
//    
//  
////       arr2.forEach((item2)=>{
////           arr1.forEach(item1=>{
////                if(item1===item2){
////                result.push(item1);
////            }   
////           })
////        
////       }) 
//      
//    
//    return result
//}
//
//console.log(intersection(arr1,arr2));
// let headerBut = document.querySelector('.header_but');
// let buttonchik = headerBut.querySelector('.button');
// buttonchik.onclick = function(){
//     headerBut.removeChild(buttonchik);

//     let newButton = [];
//     for(let i = 0;i<2;i++){
// //    newButton.push(document.createElement('a'));
// //    newButton[i].innerHTML = `Нажми меня пупсик ${i+1}`;
// //    newButton[i].className = 'button';
// //    headerBut.prepend(newButton[i]);

//         headerBut.innerHTML='<a class="button">Нажми меня2</a>'
//          headerBut.innerHTML+='<a class="button">Нажми меня2</a>'
//     }
// }


//let  numberOfFilms = 0;

//start();


const personalMoveDB = {
    count: 0,
    moves: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
       
        do{
             this.count = Number(prompt('Сколько фильмов вы уже посмотрели?', ''));
        }while(this.count == ''||this.count==null||isNaN(this.count));
    },
    rememberMyFilms: function (){
        let count = 2;
        while(count!=0){
            const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
            markLastFilm = Number(prompt('На сколько оцените его?', ''));
             if(lastFilm==null||lastFilm.length>50||lastFilm==''||markLastFilm==null||isNaN(markLastFilm)){
                 continue;
             }
             
             this.moves[lastFilm] = markLastFilm;
             count--;
         }
    },
    detectPersonalLevel: function (){
        if(this.count<10){
            alert('Просмотрено довольно мало фильмов');
        }else if(this.count>=10&&this.count<=30){
            alert('Вы классический зритель');
        }else if(this.count>30){
            alert('Вы киноман');
        }else{
            alert('Произошла ошибка');
        }
    },
    showMyDB: function (hidden){
        if(!hidden){
            console.log(personalMoveDB);
        }
    },
    writeYourGenres: function (){
   
        for(let i = 0; i<3;i++){
             let currentGenre;
       do{
          currentGenre = prompt(`Ваш любимый жанр под номером ${i+1}`,'');
       } while(currentGenre==null||currentGenre=='');

       this.genres.push(currentGenre);
        }
        this.genres.forEach((item,index)=>{
            console.log(`Любимый жанр #${index+1} - это ${item}`);
        });
     
    },
    
    toggleVisibleMyDB: function(){

        if(this.privat===false){
            this.privat=true;
        }else{
            this.privat=false;
        }
    },
};

personalMoveDB.start();

personalMoveDB.rememberMyFilms();


personalMoveDB.detectPersonalLevel();

//personalMoveDB.toggleVisibleMyDB();
personalMoveDB.showMyDB(personalMoveDB.privat);


personalMoveDB.writeYourGenres();