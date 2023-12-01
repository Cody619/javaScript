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

const a = 0.1;
const b = 0.2;

const sum = a + b;

console.log(sum); // 0.3

//перетворення данних

const str = "1";
const sumNum = 2;

const aNum = Number(str);
const change = aNum + sumNum;

console.log(change); // 3

//гаманець

const money = Number(prompt("Скільки грошей у вас в гаманці? "));
const price = Number(prompt("Скільки коштує одна шоколадка? "));

const cout = money / price;
const chang = money % price;

console.log(
  `Ви можете купити ${cout} шоколадок. У вас залишиться ${chang} гривень.`
);
