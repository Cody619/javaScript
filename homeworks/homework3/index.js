//знайти дільник

const lowerBound = +prompt("Введіть нижню межу діапазону:");
const upperBound = +prompt("Введіть верхню межу діапазону:");
let sumNumber = 0;
for (let i = lowerBound; i <= upperBound; i++) {
  sumNumber += i;
}
console.log(sumNumber);

//снижка при покупці

let sum = +prompt("сума покупки");

if (sum >= 200 && sum <= 299) {
  sum = sum - (sum / 100) * 3;
}

if (sum >= 300 && sum <= 499) {
  sum = sum - (sum / 100) * 5;
}

if (sum >= 500) {
  sum = sum - (sum / 100) * 7;
}

console.log(sum);

//гра

let num = +prompt("Введіть число");
let minRange = 0;
let maxRange = 100;
let userAnswer = "";
while (true) {
  // Знаходимо середину поточного діапазону
  const guess = Math.floor((minRange + maxRange) / 2);
  // Питаємо у користувача, чи його число >, < чи == поточному числу
  userAnswer = prompt(
    `Ваше число більше (>), менше (<) чи дорівнює (=) ${guess}? Введіть один з символів.`
  );
  if (userAnswer === ">") {
    minRange = guess + 1; // Змінюємо мінімальний діапазон
  } else if (userAnswer === "<") {
    maxRange = guess - 1; // Змінюємо максимальний діапазон
  } else if (userAnswer === "=") {
    alert(`Ваше число - ${guess}! Гра завершена.`);
    break;
  } else {
    alert("Будь ласка, введіть коректний символ (> , < або =).");
  }
}

//календар
const day = +prompt("введіть день");
const month = +prompt("введіть місяць");
const year = +prompt("введіть рік");
let nextDay = day;
let nextMonth = month;
let nextYear = year;
if (day >= 1 && day <= 29) {
  nextDay += 1;
} else if (day === 30) {
  nextDay = 1;
}
if (day > 30) {
  nextMonth += 1;
}
if (month >= 1 && month <= 11 && day === 30) {
  nextMonth += 1;
} else if (month === 12 && day === 30) {
  nextMonth = 1;
}
if (month === 12 && day === 30) {
  nextYear += 1;
}
const date = `${nextDay} ${nextMonth} ${nextYear}`;
console.log(date);

// Функція для знаходження НСД
function findGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
// Запит користувача на введення двох чисел
const number1 = parseInt(prompt("Введіть перше число: "));
const number2 = parseInt(prompt("Введіть друге число: "));
// Перевірка чи введені коректні числа
if (isNaN(number1) || isNaN(number2)) {
  console.log("Будь ласка, введіть коректні числа.");
} else {
  // Знаходження та виведення результату
  const gcd = findGCD(number1, number2);
  console.log(`Найбільший спільний дільник ${number1} i ${number2} є: ${gcd}`);
}

//таблиця множення

let someNum = prompt("введіть від 2 - 9");
let result = 0;

if (someNum >= 2 && someNum <= 9) {
  for (let i = 1; i <= 10; i++) {
    result = someNum * i;

    console.log(result);
  }
}
