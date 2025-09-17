let $ = require('jquery');
import { router } from './router.js'


$(document).ready(function () {
	router.showScreen(
		router.screens.trainer,
	);
});

