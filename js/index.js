let $ = require('jquery');

let currentList = [
	{ question: 'Привет', answer: 'Hello' },
	{ question: 'Мир', answer: 'World' },
	{ question: 'Вода', answer: 'Water' },
	{ question: 'Огонь', answer: 'Fire' },
	{ question: 'Земля', answer: 'Earth' },
	{ question: 'Воздух', answer: 'Air' },
	{ question: 'Дом', answer: 'House' },
	{ question: 'Семья', answer: 'Family' },
	{ question: 'Друг', answer: 'Friend' },
	{ question: 'Время', answer: 'Time' },
	{ question: 'Любовь', answer: 'Love' },
	{ question: 'Работа', answer: 'Work' },
	{ question: 'Еда', answer: 'Food' },
	{ question: 'Деньги', answer: 'Money' },
	{ question: 'Город', answer: 'City' }
];

let currentIndex = 0;

$(document).ready(function () {
	$('.trainer-user-answer input').focus();
	writeQuestion();

	$(document).keypress(function (e) {
		if (e.which === 13) {
			if ($('.trainer-real-answer').hasClass('hidden')) {
				checkAnwser();
			} else {
				nextQuestion();
			}
		}
	});
});

function writeQuestion() {
	$('.trainer-count').html((currentIndex + 1) + " / " + currentList.length);
	$('.trainer-question').html(currentList[currentIndex].question);
	$('.trainer-real-answer').html(currentList[currentIndex].answer);
}

function checkAnwser() {
	let userAnswer = $('.trainer-user-answer input').val();

	if (userAnswer == currentList[currentIndex].answer) {
		$('.trainer-real-answer').addClass('good');
	} else {
		$('.trainer-real-answer').addClass('bad');
	}
	$('.trainer-real-answer').removeClass('hidden');
}

function nextQuestion() {
	currentIndex++;

	$('.trainer-user-answer input').val('');
	$('.trainer-real-answer').addClass('hidden');
	$('.trainer-real-answer').removeClass('good');
	$('.trainer-real-answer').removeClass('bad');
	writeQuestion();
}
