/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

let mass = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
// console.log(mass.includes('а'))
function findVowels(str) {
	let total = 0;
	for (let i = 0; i < str.length; i++) {
		if (mass.includes(str[i])) {
			total += 1;
		}
	}
	return total;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3