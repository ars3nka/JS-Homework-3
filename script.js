// ДЗ 3:
// 1. для отправленной в функцию строки найти каким по счету является первое вхождение  слова "lorem", регистр не важен
// 2. создать массив из исходного, в котором четные элементы(не индексы) увеличены вдвое, а нечетные уменьшены вдвое, при этом если число делится на 13 без остатка, то сначала нужно отнять от него 5
// 3*. для отправленной в функцию строки найти каким по счету является последнее вхождение  слова "lorem ipsum", регистр не важен

// Подсказка: у строки есть метод, превращающий ее в массив по заданному разделителю
// Ренение разместите в отдельно созданном репозиторий и задеплойте на версел(или куда угодно еще). Ответом должна быть строка ДЗ 3 + ссылка на репозиторий с решением, внутри которого должна быть ссылка на сайт с деплоем. Созданные методы должны быть доступны в консоли созданного сайта.

// 1 Задание.
const string = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`;

function lorem() {
  console.log(string.toLowerCase().indexOf('lorem'));
}

lorem();

// 2 Задание.
// Не понимаю куда всунуть проверку деления на 13
const arr = [1, 12, 13, 8, 6, 99, 100004, 26];

let arrFiltered = [];

for (i = 0; i < arr.length; i++) {
  if (arr[i] % 13 == 0) {
  arrFiltered.push(arr[i] - 5);
  } else if (arr[i] % 2 == 0) {
    arrFiltered.push(arr[i] * 2);
  } else if (arr[i] % 2 == 1) {
    arrFiltered.push(arr[i] / 2);
  } 
}

console.log(arrFiltered);

// 3 Задание.

function loremLast() {
  console.log(string.toLowerCase().lastIndexOf('lorem ipsum'));
}

loremLast();