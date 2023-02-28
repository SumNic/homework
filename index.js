import {string} from './1.js';

import {mathemat} from './2.js';

// Преобразование строки

export let str = 'Текст, в котором слово текст несколько раз встречается и слово тоже';

console.log( string.capital(str) );     // преобразование строки к нижнему регистру, первая буква большая
console.log( string.convert(str) );     // преобразование строки с правильной расстановкой пробелов и знаков препинания
console.log( string.quantity(str) );    // кол-во слов в строке
console.log( string.uniq(str) );        // подсчет уникальных слов

// операции с числами любой длины

export let num1 = '90000.503359';
export let num2 = '100000.005637';

console.log( mathemat.addition(num1, num2) );
console.log( mathemat.subtraction(num1, num2) );
console.log( mathemat.multiplication(num1, num2) );
console.log( mathemat.division(num1, num2) );