// Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
console.log(
    [1, 10, 5, 12, 11]
    .filter(element => !(element % 2))
    .reduce((sum, element) => sum + Math.sqrt(element), 0)
   );

// Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе – чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
console.log(1.15+2.30)

// Треугольник. Напишите цикл,  выводит такой треугольник:
// *
// **
// ***
// ****
// *****
// ******
let triangle = ''
for (let i=0; i < 6; i++) {
    triangle+='*';
    console.log(triangle);
}

// Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
for (i=0; i<=100; i++) {
    if (i % 3 === 0) {
        console.log('Fizz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else console.log(i)
};

for (i=0; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else console.log(i)
};

// Напишите скрипт, который считает количество секунд в часе.
console.log(60*60)

// Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.
let username = prompt("Введите Ваше имя")
alert("Ваше имя " + username)

// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'
let str = 'abcde'
console.group();
    console.log(str[0])
    console.log(str[2])
    console.log(str[4])
console.groupEnd()

// Создайте ассоциативный массив заработных плат...
var obj = {'Коля':'1000', 'Вася':'500', 'Петя':'200'};
console.group();
    console.log(obj['Петя']);
    console.log(obj['Коля']);
console.groupEnd()

// Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
let arr = [2, 5, 3, 9];
let result = arr[0]*arr[1]+arr[2]*arr[3]
console.log(result)

// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4из этого массива.
let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(array[1][0]);

// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
var min = 10;
if (min >= 0 && min <= 14) {
	console.log('В первую четверть.');
}
if (min >= 15 && min <= 30) {
	console.log('Во вторую четверть.');
}
if (min >= 31 && min <= 45) {
	console.log('В третью четверть.');
}
if (min >= 46 && min <= 59) {
	console.log('В четвертую четверть.');
}

// Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при  a, равном 1, 0, -3.
let a = 1
if (a < 0) {
    console.log("Неверно")
} else console.log("Верно")

let b = 0
if (b < 0) {
    console.log("Неверно")
} else console.log("Верно")

let c = -3
if (c < 0) {
    console.log("Неверно")
} else console.log("Верно")

// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при  test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
let test1 = true
if (test1 == true) {
console.log('Верно');
} else {
console.log('Неверно');
};

let test2 = false;
test2 ? console.log('Верно') : console.log('Неверно');

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.
let num = 1;
let result1;

switch (num) {
	case 1:
        result1 = 'зима';
        break;
	case 2:
		result1 = 'весна';
        break;
	case 3:
		result1 = 'лето';
        break;
    case 3:
        result1 = 'осень';
        break;
}

console.log(result1);

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла forвыведите все эти элементы на экран.
var arr2 = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < arr2.length; i++) {
	console.log(arr2[i]);
}

// Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
let a1 = 10;
let b1 = 3;
console.log(a1 % b1)

// Возведите 2 в 10 степень. Результат запишите в переменную st.
let st = Math.pow(2, 10);
console.log(st)

// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
let bebra = Math.sqrt(379)
console.log(Math.round(bebra))
console.log(Math.round(bebra * 10)/10)
console.log(Math.round(bebra * 100)/100)

// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
let jebra = [4, -2, 5, 19, -130, 0, 10]
console.log('Минимальное число: ', Math.min.apply(null, jebra))
console.log('Максимальное число: ', Math.max.apply(null, jebra))

//  Выведите на экран случайное целое число от 1 до 100.
console.log(Math.floor(Math.random() * 100))

// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
let str1 = 'aaa bbb ccc'
console.log(str1.substr(4, 3))
console.log(str1.substring(4, 7))
console.log(str1.slice(4, 7))

// Дана строка 'js'. Сделайте из нее строку 'JS'.
let str2 = 'js'
console.log(str2.toUpperCase())

// Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
let str3 = 'я учу javascript!'
console.log(str3.length)

// Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
let str4 = 'я учу javascript!'
console.log(str4.indexOf('учу'))

// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
let str5 = 'Я-учу-javascript!'
str6 = str5.replace(/-/g , '!')
console.log(str6)

// Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
let str7 = 'я учу javascript!'
let arrStr = str7.split('')
console.log(arrStr)

// Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
let arrStr1 = ['я', 'учу', 'javascript', '!']
console.log(arrStr1.join('+'));

// Преобразуйте первую букву строки в верхний регистр.
let str8 = 'hello World!'
console.log(str8[0].toUpperCase() + str8.slice(1))