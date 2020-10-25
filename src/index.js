module.exports = function check(str, bracketsConfig) {
	const stack = [];
	const brackets = Object.fromEntries(bracketsConfig);

	for (const element of str.split``) {   //массив из строки str
		 if (stack[0] === element) {
			  stack.shift();            // удаление 1 эл массива
		 } else if (brackets[element]) {
			  stack.unshift(brackets[element]);  // добавление эл массива
		 } else {
			  return false;
		 }
	}

	return stack.length === 0; // true если длина массива пуста
}

