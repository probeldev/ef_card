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

	function save(obj) {
		// TODO: При добавлении не забывать проверять уникальность name
		let jsonString = JSON.stringify(obj)
		try {
			fs.writeFileSync(filePath, jsonString, 'utf8');
			console.log('Файл успешно записан');
			return true;
		} catch (error) {
			console.error('Ошибка записи файла:', error);
			return false;
		}
	}


	return {
		get: get,
		save: save,
	}
})();

