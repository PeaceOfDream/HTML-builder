const path = require('path');
const fs = require('fs');
const readline = require('readline');
let writeText

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

console.log('Enter text:');



rl.on('line', line => {
	if (!writeText) {
		writeText = fs.createWriteStream(path.join(__dirname, 'text.txt'))
	}
	if (line === 'exit' || line === 'Exit' || line === 'EXIT') {
		process.exit();
	}
	writeText.write(`${line} \n`)
});

process.on('SIGINT', () => exit());
process.on('exit', () => console.log('\bBuy!'));



