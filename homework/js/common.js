"use strict";
console.log('---- Список функцій: ----');
console.log('---- 1)findMin ---- ( Вираховує яке з вказаних чисел менше )');
console.log('---- 2)findAr ---- ( Вираховує середнє арифметичне )');
console.log('---- 3)findPow ---- ( Підносить до степіня)');
function findMin(a, b) {
    if (a === b) {
        console.log('числа рівні, спробуйте ще раз :)');
    } else if (a > b) {
        console.log('меньшим числом являється =', b);
    } else {
        console.log('меньшим числом являється =', a);
    }
}
function findAr(a, b) {
    a = (a + b) / 2;
    console.log('Середнє арифметичне =', a);
}
function findPow(a, b) {
    if (a && b > 0) {
        var i;
        var s;
        var m = a;
        for( i = 1; i < b; i++ ) {
            a = a * m;
        }
        console.log('Число', m,'в степені', b, '=', a);
    } else if(a === 0) {
        console.log('Число 0 до степіня не підноситься')
    } else if(a > 0 && b !== 0) {
        var b = 2;
        var m = a * a;
        console.log('Число', a,'в степені 2 =', m );
    } else {
        console.log ('Число', a,'в степені', b, '=', 1);
    }
}