'use strict';

setTimeout(function() {
	let side1len = +prompt("Сторона 1"),
		side2len = +prompt("Сторона 2");
	if (side1len <= 0 || side2len <= 0) {
		alert('Введите корректное значение сторон прямоугольника');
	} else {
		alert("Площадь прямоугольника = " + (side1len * side2len));
	}
}, 500);
