install: 
	npm install

start: 
	npx babel-node -- src/bin/brain-games.js

brain-even: 
	npx babel-node -- src/bin/brain-even.js

lint:
	npx eslint .

publish:
	npm publish