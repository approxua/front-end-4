"use strict";
console.log('---- Список функцій: ----');
console.log('---- 1)findMin ---- ( Вираховує яке з вказаних чисел менше )');
console.log('---- 2)findAr ---- ( Вираховує середнє арифметичне )');
console.log('---- 3)findPow ---- ( Підносить до степіня)');
var min;
var ar;
var pow;
function findMin(a, b) {
    if (arguments.length) {
    if (a >= b) {
        return min = b ;
    } else {
        return min = a;
    }
} else {
    console.log('Введіть значення для перевірки')}
}
function findAr(a, b) {
    if (arguments.length) {
        ar = (a + b) / 2;
        return ar;
    } else {
        console.log('Введіть значення для перевірки')}
}
function findPow(a, b) {
    if (arguments.length) {
        if (a && b > 0) {
            var i;
            pow = a;
            for (i = 1; i < b; i++) {
                a = a * pow;
            }
            return pow = a;
        } else if (a === 0) {
            console.log('Число 0 до степіня не підноситься')
        } else if (a > 0 && b !== 0) {
            pow = a * a;
            return pow;
        } else {
            return pow = 1;
        }
    } else {
        console.log('Введіть значення')}
}