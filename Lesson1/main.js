'use strict';
/*let userName = prompt('Как вас зовут?');


// alert('Привет, ' + userName); 
alert(`Привет, ${userName}`); 


userName = 555;
alert(`Привет, ${userName}`);*/

/*// Задание 1
let a = prompt('Введите число', '5');
let b;
b = a ** 2; 
// alert(`Квадрат числа ${a} равен ${b}`);
alert('Квадрат числа '+ a + ' равен '+ b);*/

/*// Задание 2
let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
let c = (a+b)/2;
alert('Среднее арифметическое равно ' + c);*/

/*// Задание 4
const METER_TO_MILES = 0.621371;
let meters = +prompt('Введите количество метров');
let miles = meters * METER_TO_MILES;
alert('В милях это ' + miles);*/

/*// Задание 8
let num, secondSymbol;

num = +prompt('Введите трёхзначное число');
secondSymbol = num % 100;
secondSymbol = (secondSymbol - (secondSymbol % 10))/10;
alert(secondSymbol);*/

/*//Условия. Задание 1
let userNumber;

userNumber = +prompt('Введите число');
if (userNumber < 0) {
    alert('Число отрицательное');
} else if (userNumber === 0) {
    alert('Число равно нулю');
} else alert('Число положительное');*/

/*// Задание 2
let userAge = +prompt('Сколько вам лет?');
if (userAge < 0 || userAge > 120) {
    alert('Вы врёте!');
}*/

//Задание 3
let userNamber, modul;

userNamber = +prompt('Введите число');
if (userNamber < 0)     
    modul = -userNamber;
else modul = userNamber;
alert('Модуль равен ' + modul);