/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
	return str.split(' ').map((word) => {
		return word.slice(0, 1).toUpperCase() + word.slice(1);
	}).join(' ');
}
// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('как бы то ни было'));