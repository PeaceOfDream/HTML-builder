const path = require('path');
const fs = require('fs');

const stylesPath = path.join(__dirname, 'styles');
const projectDist = path.join(__dirname, 'project-dist')
const bundlePath = path.join(__dirname, 'project-dist', 'style.css');


fs.mkdir(projectDist, err => {
	if (err) throw err; 
});
fs.readdir(stylesPath, (err, files) => {
	fs.writeFile(bundlePath, '', (err) => {
		if (err) throw err;
	})
	for (let file of files) {
		const ext = path.extname(file);
		const stylesFile = path.join(stylesPath, file)
		if (ext === '.css') {
			fs.readFile(stylesFile, (err, data) => {
				if (err) {
					process.exit();
				}
				fs.appendFile(bundlePath, data, (err) => {
					if (err) throw err;
				});
			});
		}
	}
});



const assetsName = path.join(__dirname, 'files');
const filesCopyName = path.join(__dirname, 'project-dist', 'assets');


	fs.mkdir(filesCopyName, { recursive: true }, err => {

		fs.readdir(assetsName, (err, files) => {

			for (let file of files) {
				let original = path.join(assetsName, file)
				let copy = path.join(filesCopyName, file)
				fs.copyFile(original, copy, err => {
					if (err) throw err
				})
			}
		});
	});






