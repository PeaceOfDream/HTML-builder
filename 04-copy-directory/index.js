const path = require('path');
const fs = require('fs');

const filesName = path.join(__dirname, 'files');
const filesCopyName = path.join(__dirname, 'files-copy');

function copyDir() {
	fs.mkdir(filesCopyName, { recursive: true }, err => {


		fs.readdir(filesCopyName, (err, files) => {
			if (err) throw err;

			for (const file of files) {
				fs.unlink(path.join(filesCopyName, file), err => {
					if (err) throw err;
				});
			}
		});


		fs.readdir(filesName, (err, files) => {

			for (let file of files) {
				let original = path.join(filesName, file)
				let copy = path.join(filesCopyName, file)
				fs.copyFile(original, copy, err => {
					if (err) throw err
				})
			}
		});
	});
}
copyDir()