'use strict'

const { resolve } = require("path/posix");

//Fetch API and Promise



// setTimeout(() => {
//     user.animals = true;
//     console.log(user);
    
//     setTimeout(() => {
//         user.age = 11;

//         console.log(user);
//         setTimeout(() => {
//             user.name = 'Vasya';
//             console.log(user);
//         }, 2000);

//     }, 2000);
// }, 2000);


const animals = new Promise((resolve,reject)=>{
    
const user = {
    'name':'Ivan',
    age:10,
    cute:true
};
    setTimeout(() => {
        user.animals = true;
        console.log("Добавляем животных...");
    
    resolve(user);

    },2000);
});

animals.then(user=>{

  return new Promise((resolve,reject)=>{
        setTimeout(() => {
            user.age = 11;
    
            console.log('Изменяем возраст...');

            resolve(user);
                },2000);

    })
    
    .then((user)=>{

        return new Promise((resolve,reject)=>{
                setTimeout(() => {
                user.name = 'Vasya';
                console.log('Изменяем имя...');
                
                resolve(user);
            }, 2000);
        })    
        .then((user)=>{
        
        console.log(user);
       //return user;
       
    }).then(user=>console.log(user.name))
    .catch(()=>{
        console.log('произошла ошибка');
    });
        
  
    });

});