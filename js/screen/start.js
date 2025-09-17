let $ = require('jquery');
import { router } from './../router.js'
import { cardStorage } from './../storage/card.storage.js'

const screen = {
	init: function () {
		let cardList = cardStorage.get();

		let html = "";

		cardList.map(list => {
			html += '<div class="card-list-el">';
			html += list.name;
			html += '</div>';
		});

		$('#screen-start-card-wrapper').html(html);

		$('.card-list-el').off('click')
		$('.card-list-el').on('click', function () {
			let cardName = $(this).html();

			cardList.map(list => {
				if (cardName == list.name) {
					router.showScreen(
						router.screens.trainer,
						list,
					);
				}
			});
		});
	}
}

export default screen
