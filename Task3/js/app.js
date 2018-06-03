'use strict';
/**
 * Отложенный вызов рабочего кода с паузой 500мс, чтобы загрузилось содержимое HTML.
 * Иначе синхронное выполнение кода JavaScript заблокирует дальнейший разбор
 * "index.html" и мы не увидим содержимое страницы (условие задачи).
 */
setTimeout(function() {
	let operand1 = prompt("Значение 1"),
		operand2 = prompt("Значение 2"),
		operator = (prompt("Оператор") || "").trim();
	/**
	 * Возвращает true, если переданное значение val совместимо с числом при операции
	 * неявного преобразования.
	 * Экземрляр Date совместим, другие объекты чаще всего нет.
	 * Чтобы объект стал совместим, у него нужно переопределить метод toString.
	 * @param {mixed} val - Проверяемое значение произвольного типа.
	 * @return {boolean}
	 */
	function isNumeric(val) {
		if (val === "") {
			return false;
		}
		if (typeof(val) === 'string') {
			val = +val;
		}
		return (val > 0) || (val < 0) || (val === 0);
	}
	if (!isNumeric(operand1) || !isNumeric(operand2)) {
		alert(
			'Ошибка! Операнды должны быть совместимы с числами по неявному преобразованию.'
		);
	} else {
		operand1 = +operand1;
		operand2 = +operand2;
		let result;
		switch (operator) {
			case '+':
				result = operand1 + operand2;
				break;
			case '-':
				result = operand1 - operand2;
				break;
			default:
				alert("Ошибка! Операция не поддерживается.");
				break;
		}
		if (result !== undefined) {
			alert(operand1 + " " + operator + " " + operand2 + " = " + result);
		}
	}
}, 500);
