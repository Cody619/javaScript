// Знаходимо кількість мегабайт в одному гігабайті
const gbInMb = 1024;

// Запитуємо у користувача обсяг флешки в Гб
const capacityInGb = prompt("Введіть обсяг флешки в Гб: ");

// Обчислюємо загальний обсяг флешки в Мб
const capacityInMb = gbInMb * capacityInGb;

// Обчислюємо кількість файлів, що поміщаються на флешку

//округляємо до рівного числа
const count = Math.floor(capacityInMb / 820);

// Виводимо результат
console.log(
  `На флешку розміром ${capacityInGb} Гб поміщається ${count} файлів розміром в 820 Мб.`
);

//матиматичне правельне рішення

let result = (0.1 * 10 + 0.2 * 10) / 10;
console.log(result);

//перетворення данних

const str = "1";
const sumNum = 2;

console.log(Number(str) + sumNum); // 3

//гаманець

const money = Number(prompt("Скільки грошей у вас в гаманці? "));
const price = Number(prompt("Скільки коштує одна шоколадка? "));
//округляємо
const cout = Math.floor(money / price);
//знаходемо решту
const chang = money % price;

console.log(
  `Ви можете купити ${cout} шоколадок. У вас залишиться ${chang} гривень.`
);

//реверс числа

let number = prompt("назвіть тризначне число");
let revNumber = 0;
while (number > 0) {
  revNumber = revNumber * 10 + (number % 10);
  number = Math.floor(number / 10);
}
console.log(revNumber);

//процентна ставка вкладу

let deposit = prompt("Введіть суму вкладу в банк:");
// Річна процентна ставка
let procent = 5;
// Кількість місяців
let Months = 2;
// Розрахунок суми відсотків
let rezult = (deposit * procent * Months) / (12 * 100);
console.log(`Сума нарахованих відсотків: ${rezult.toFixed(2)} грн`);
