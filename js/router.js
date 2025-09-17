let $ = require('jquery');

export const router = {
	screens: {
		start: {
			bodyId: "screen-start",
			worker: "./screen/start.js"
		},
		trainer: {
			bodyId: "screen-trainer",
			worker: "./screen/trainer.js"
		},
	},

	async showScreen(
		screen,
		params,
	) {

		let currentScreen = ""
		$('.screen').each(function () {
			if (!$(this).hasClass('hidden')) {
				currentScreen = $(this).attr('id');
			}
		});

		$('.screen').addClass('hidden');
		$('.screen').removeClass('screen-show');
		$('#' + screen.bodyId).removeClass('hidden');
		$('#' + screen.bodyId).addClass('screen-show');

		try {
			const module = await import(screen.worker);
			if (module.default?.init) {
				module.default.init(params);
			} else {
				console.error(`Модуль ${screen.worker} не имеет метода init()`);
			}
		} catch (error) {
			console.error(`Ошибка загрузки модуля ${screen.worker}:`, error);
		}
		// implementPullToRefresh();
	}
}


