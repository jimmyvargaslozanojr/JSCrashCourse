// console.log('hello');
// alert('yooo');

//Variables

// var b = 'smoothie';
// console.log(b);

// var someNumber = 45;
// console.log(someNumber);

// var age = prompt('What is your age?');
// console.log(age);

// document.getElementById('sometext').innerHTML = age;

// var num1 = 10;
// num1 = num1 + 1;
// console.log(num1);

// Divide, Multiply *, Remainder %

// console.log(num1 % 6);

// num1 += 10;
// console.log(num1);

// Fuction

// function fun(){
//     console.log('this is a function');
// }
// fun();

// function greeting(youName){
//     var result = 'Hello'+ ' ' + youName;
//     console.log(result);
// }
// var name = prompt('What is yout name');
// greeting(name);

// greeting();

// function sumNumbers(num1,num2){
//     var result = num1 + num2;
//     console.log(result);
// }
// sumNumbers(32,12);

// var num = 0;
// while (num < 100){
//     num += 1;
//     console.log(num);
// }

// for(let num = 0; num <= 100 ; num++){
//     console.log(num);
// }

// Data Type

// let yourAge = 18; //number
// let yourName = 'Bob'; //string
// let name = {first: 'Jane',last: 'Doe'}; //Object
// let fruits = ['apple','banana','orange'] //Arrays
// let truth = false; //boolean
// let random; //undefined
// let nothing = null; //value null
// let fruit = 'banana';
// let moreFruits = 'banana\napple'; //new line


// console.log(fruit.length);
// console.log(fruit.indexOf('n'));
// console.log(fruit.slice(2,6));
// console.log(fruit.replace('a','u'));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(''));
// console.log(fruit.split(','));

// Array

let fruits = ['banana', 'apple', 'orange', 'pineapple'];
fruits = new Array('banana', 'apple', 'orange', 'pineapple');

// console.log(fruits[2]); //access value at index 2nd
fruits[0] = 'pear';
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

// array common methods

// console.log('to string',fruits.toString());
// console.log(fruits.join('-'));
// console.log(fruits,fruits.pop(),fruits);
// console.log(fruits.push('blackberries'),fruits);
// fruits[fruits.length] = 'guava';
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.unshift('kiwi');
// console.log(fruits);

// let vegetables = ['asparagus','tomato','brocolli'];
// let allGroceries = fruits.concat(vegetables);
// console.log(allGroceries);
// console.log(allGroceries.splice(1,4));
// console.log(allGroceries.reverse());

// let someNumber = [5,10,2,20,25,255,343,6545,43];
// console.log(someNumber.sort(function(a,b){
//     return a-b
// }));

// let emptyArray = new Array();

// for (let num = 0; num <= 10; num++){
//     emptyArray.push(num);
// }
// console.log(emptyArray);

let student = {
    first:'Rafeh',
    last:'Qazi', 
    age:25, 
    height:170,
    studentInfo: function(){
        return this.first + '\n' + this.last;
    }
};
console.log(student.first);
student['first'] = 'Jimmy';
console.log(student['age']);
console.log(student.studentInfo());

