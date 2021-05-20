//1. Дан код.Почему код даёт именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - префиксный
d = b++; alert(d);           // 1 - постфиксный
c = (2 + ++a); alert(c);      // 5 - 'а' уже = 2 + префикс
d = (2 + b++); alert(d);      // 4 - 'б' = 2 + постфикс
alert(a);                    // 3 - инкремент сработал 2 раза
alert(b);                    // 3 - инкремент сработал 2 раза


//2. Чему будет равен x в примере ниже ?
var a = 2;
var x = 1 + (a *= 2);
//x = 5


//3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения.Затем написать скрипт, который работает по следующему принципу:
var a = parseInt(Math.random() * 9 + -9);
var b = parseInt(Math.random() * 9 + -9);

//если a и b положительные, вывести их разность;
if (a > 0 && b > 0) {
    x = a - b;
    alert(x);
}

//если а и b отрицательные, вывести их произведение;
if (a < 0 && b < 0) {
    x = a * b;
    alert(x);
}

//если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
if (a < 0 && b > 0 || a > 0 && b < 0) {
    x = a + b;
    alert(x);
}



//4. Присвоить переменной а значение в промежутке[0..15].С помощью оператора switch организовать вывод чисел от a до 15. Дополнительно, по желанию, реализуйте решение с помощью рекурсивной функции

var a = +prompt("Введите целое число от 0 до 15");
switch (a) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    case 4:
        console.log(4);
        break;
    case 5:
        console.log(5);
        break;
    case 6:
        console.log(6);
        break;
    case 7:
        console.log(7);
        break;
    case 8:
        console.log(8);
        break;
    case 9:
        console.log(9);
        break;
    case 10:
        console.log(10);
        break;
    case 11:
        console.log(11);
        break;
    case 12:
        console.log(12);
        break;
    case 13:
        console.log(13);
        break;
    case 14:
        console.log(14);
        break;
    case 15:
        console.log(15);
        break;
}

function a(n) {
    if (n == -1) {
        return;
    }
    console.log(n);
    a(n - 1);
}
a(10);


//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.

function sum(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function div(a, b) {
    return a / b;
}


//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции.В зависимости от переданного значения операции выполнить одну из арифметических операций(использовать функции из пункта 5) и вернуть полученное значение(использовать switch).



function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case sum:
            return sum(arg1, arg2);
            break;
        case sub:
            return sub(arg1, arg2);
            break;
        case mult:
            return mult(arg1, arg2);
            break;
        case div:
            return div(arg1, arg2);
            break;
    }
}

console.log(mathOperation(5, 5, sum));
console.log(mathOperation(5, 5, sub));
console.log(mathOperation(5, 5, mult));
console.log(mathOperation(5, 5, div));