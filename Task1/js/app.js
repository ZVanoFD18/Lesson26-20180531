'use strict';
setTimeout(function() {
	(function(data) {
		if (typeof(data) !== "object") {
			return alert('Данные не загружены.');
		}
		let cntPass = 0,
			cntCorrect = 0;
		for (let i = 0, myDataLength = data.length; i < myDataLength; i++) {
			let answer = prompt("Вопрос " + (cntPass + 1) + " из " + myDataLength +
				":\n" + data[cntPass].question //
			);
			answer = (answer || "").trim().toLowerCase();
			let correctAnswer = data[cntPass].answer.trim().toLowerCase();
			if (answer === correctAnswer) {
				++cntCorrect;
			}
			++cntPass;
		}
		alert("Игра окончена." //
			+ "\n Всего задано вопросов: " + cntPass //
			+ "\n Правильных ответов: " + cntCorrect //
			+ "\n Ошибочных ответов: " + (cntPass - cntCorrect) //
		);
	}).call(this, window.data);
}, 500);
