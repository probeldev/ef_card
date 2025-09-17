run-browser:
	npm install -g http-server
	http-server -p 8000 ./

run-electron:
	nix develop --command npm start
