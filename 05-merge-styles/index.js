const path = require('path');
const fs = require('fs');

const stylesPath = path.join(__dirname, 'styles');
const bundlePath = path.join(__dirname, 'project-dist', 'bundle.css');

	
fs.readdir(stylesPath, (err, files)=> {
	fs.writeFile(bundlePath, '', (err) => {
		if (err) throw err;
	})
    for (let file of files) {
		const ext = path.extname(file);
		const stylesFile = path.join(stylesPath, file)
      if(ext === '.css') {
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

