"use strict";
console.log('---- Список функцій: ----');
console.log('---- 1)findMin ---- ( Вираховує яке з вказаних чисел менше )');
console.log('---- 2)findAr ---- ( Вираховує середнє арифметичне )');
console.log('---- 3)findPow ---- ( Підносить до степіня)');

function findMin(a, b) {
    if (arguments.length) {
    if (a >= b) {
        return b ;
    } else {
        return a;
    }
} else {
    console.log('Введіть значення для перевірки')}
}
function findAr(a, b) {
    if (arguments.length) {
        return (a + b) / 2;
    } else {
        console.log('Введіть значення для перевірки')}
}
function findPow(a, b) {
    if (arguments.length) {
        if (a && b > 0) {
            var pow = a;
            for (var i = 1; i < b; i++) {
                pow *= a;
            }
            return pow;
        } else if (a === 0) {
            console.log('Число 0 до степіня не підноситься')
        } else if (a > 0 && b !== 0) {
            return a * a;
        } else {
            return 1;
        }
    } else {
        console.log('Введіть значення')}
}