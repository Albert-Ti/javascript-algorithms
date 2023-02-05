/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
	const seive = [];
	const result = [];
	for (let i = 2; i <= num; i++) {
		if (!seive[i]) {
			result.push(i);
			for (let j = i * 2; j <= num; j += i) {
				seive[j] = true;
			}
		}
	}
	return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]