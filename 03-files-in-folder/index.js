const fs = require('fs').promises;
const path = require('path');

async function getFiles() {
	const files = await fs.readdir(path.join(__dirname, 'secret-folder'), (err, files) => files);

	for (const file of files) {
		const itemF = path.join(path.join(__dirname, 'secret-folder'), file);
		const stat = await fs.stat(itemF, (err, stat) => stat);
	
		if (stat.isDirectory() == false) {
			
			const name = path.parse(itemF).name;
			const ext = path.parse(itemF).ext.slice(1);
			const weight = stat.size / 1024;
			console.log((`${name} - ${ext} - ${weight}kb`));
		}
	}
}
getFiles();

