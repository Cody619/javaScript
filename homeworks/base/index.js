//запитуємо іформацію юзера
let userName = prompt("what is your name?");
let age = prompt("what is your age?");
let email = prompt("whant is your email?");
let sex = prompt("what is your sex?");
//виводимо в консоль данні юзера
console.log(`ваші данні , ${userName} , ${age} ,${email} , ${sex}`);

//створюємо поточний рік
const years = 2023;
const birsday = prompt("рік вашого народження");
const count = years - birsday;

//виводимо вік
console.log(count);

//робимо конвертор валюти

//доллор до євро
const dollor = 1.1;
const cash = prompt("введіть вашу сумму");

//робимо перевод
const conclusion = dollor * cash;

//виводимо конвертацію
console.log(conclusion);
