let $ = require('jquery');

import { router } from './../router.js'


const screen = {
	list: {},
	currentIndex: 0,
	init: function (list) {

		let self = this;
		self.list = list;
		self.currentIndex = 0;


		$('.trainer-user-answer input').val('');
		$('.trainer-user-answer input').focus();
		$('.trainer-real-answer').addClass('hidden');
		$('.trainer-real-answer').removeClass('good');
		$('.trainer-real-answer').removeClass('bad');

		self.writeQuestion();

		$('#screen-trainer-back-button').off('click');
		$('#screen-trainer-back-button').on('click', function () {
			router.showScreen(
				router.screens.start,
			);
		});

		const handleKeypress = function (e) {
			if (e.which === 13) {
				if ($('.trainer-real-answer').hasClass('hidden')) {
					self.checkAnwser();
				} else {
					self.nextQuestion();
				}
			}
		};

		$(document).off('keypress');
		$(document).on('keypress', handleKeypress);
	},

	writeQuestion: function () {
		$('.trainer-count').html((this.currentIndex + 1) + " / " + this.list.cards.length);
		$('.trainer-question').html(this.list.cards[this.currentIndex].question);
		$('.trainer-real-answer').html(this.list.cards[this.currentIndex].answer);
	},

	checkAnwser: function () {
		let userAnswer = $('.trainer-user-answer input').val();
		userAnswer = userAnswer.trim();
		userAnswer = userAnswer.toLowerCase();

		let reference = this.list.cards[this.currentIndex].answer
		reference = reference.trim();
		reference = reference.toLowerCase();


		if (userAnswer == reference) {
			$('.trainer-real-answer').addClass('good');
		} else {
			$('.trainer-real-answer').addClass('bad');
		}
		$('.trainer-real-answer').removeClass('hidden');
	},

	nextQuestion: function () {
		this.currentIndex++;

		$('.trainer-user-answer input').val('');
		$('.trainer-real-answer').addClass('hidden');
		$('.trainer-real-answer').removeClass('good');
		$('.trainer-real-answer').removeClass('bad');
		this.writeQuestion();
	}
}

export default screen
