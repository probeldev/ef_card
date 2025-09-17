let $ = require('jquery');
import { router } from './../router.js'

const screen = {
	init: function (answers) {
		$('#screen-trainer-summary-back-button').off('click');
		$('#screen-trainer-summary-back-button').on('click', function () {
			router.showScreen(
				router.screens.start,
			);
		});

		let correctHtml = ""
		answers.correctAnswer.map(function (answer) {
			console.log(answer);
			correctHtml += '<div class="summary-answer-el">'
			correctHtml += answer.question + " - " + answer.answer;
			correctHtml += '</div>'
		});

		$('#screen-trainer-summary-correct-answer-wrapper').html(correctHtml);

		let incorrectHtml = ""
		answers.incorrectAnswer.map(function (answer) {
			console.log(answer);
			incorrectHtml += '<div class="summary-answer-el">'
			incorrectHtml += answer.question + " - " + answer.answer;
			incorrectHtml += '</div>'
		});

		$('#screen-trainer-summary-incorrect-answer-wrapper').html(incorrectHtml);
	}
}

export default screen
