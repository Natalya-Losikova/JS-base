//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var i = 2;
while (i <= 100) {
    var d = 2;
    var prime = true;

    while (d < i) {
        if (i % d == 0) {
            prime = false;
            break;
        }
        d++;
    }
    if (prime) console.log(i);
    i++;
}


//2. С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть сущность корзины.Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
//3. Товары в корзине хранятся в массиве.Задачи:
//a) Организовать такой массив для хранения товаров в корзине;

var cart = [
    {
        title: "товар 1",
        price: 200,
        quantity: 1
    },
    {
        title: "товар 1",
        price: 100,
        quantity: 5
    },
    {
        title: "товар 1",
        price: 450,
        quantity: 3
    }
];

//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(cart) {
    var count = 0;
    for (var item of cart) {
        count += item.price * item.quantity;
    }
    return count.toFixed(2);
}

alert("Сумма товаров = " + countBasketPrice(cart) + " руб ")

//4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.Выглядеть это должно так:

for (var i = 0; i < 10; console.log(i++)) { }

//5. * Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
var str = " ";
var x = "x";
for (var i = 0; i < 20; i++) {
    str += x;
    console.log(str);
}
