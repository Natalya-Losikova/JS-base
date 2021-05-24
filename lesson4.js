/*/1. Написать функцию, преобразующую число в объект.Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.Например, для числа 245 мы должны получить следующий объект: { ‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }.Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.


var obj = {};

function numberObj(no) {
    if (-1 < parseInt(no) && parseInt(no) < 1000) {
        obj.ed = parseInt(no % 10);
        obj.doz = parseInt((no % 100) / 10);
        obj.hun = parseInt(no / 100);
        alert(obj.ed + " - едениц, " + obj.doz + " - десятков, " + obj.hun + " - сотен.");
        return obj;
    } else {
        console.log("Число превышает 999.");
        return {};
    }
};

numberObj(+prompt("Введите целое число от 0 до 999"));*/



//2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n(номер задается пользователем)

var event, ok;
var answers = [];
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

function answer(question, ans, exit) {
    var ok = false;
    do {
        Event = +prompt(question + ans1 + ans2 + '-1-Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(works.a0, event);
        }
    } while (ok!);
    switch (event) {
        case 1: answers.push([question, ans1]);
        case 2: answers.push([question, ans2]);
        case -1: answers.push([question, "Выход из игры"]);
    }
    return event;
}

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    break;
}
    else {
    ok = isAnswer(works.a0, event);
}
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {

                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert(promp("Результат какого окна отобразить?"))
alert('Спасибо за игру');
//------------------------------------------






alert("введите номер окна?") //для этого нужно хранить ответы в массиве var answers = [];

