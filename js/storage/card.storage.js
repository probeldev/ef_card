const fs = require('fs');
const path = require('path');

const dbPath = './cards.json'


export let cardStorage = (() => {
	function get() {
		try {
			const data = fs.readFileSync(dbPath, 'utf8');
			const obj = JSON.parse(data);
			console.log('Содержимое файла:', data);
			return obj;
		} catch (error) {
			console.error('Ошибка чтения файла:', error);
			return null;
		}
	}

	function add(content) {
		// TODO: При добавлении не забывать проверять уникальность name
		// TODO: Конвертировать в json
		try {
			fs.writeFileSync(filePath, content, 'utf8');
			console.log('Файл успешно записан');
			return true;
		} catch (error) {
			console.error('Ошибка записи файла:', error);
			return false;
		}
	}


	return {
		get: get,
		add: add,
	}
})();

