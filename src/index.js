import express from 'express';
import path from 'path';
import fs from 'fs';

const server = express();
const port   = 3040;
const directoryPath = path.join(process.env.PICTURES_DIR);

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '/views'));
server.use(express.static(directoryPath));

server.get('/', (req, res) => {
  fs.readdir(directoryPath, (err, files) => {
    //handling error
    if (err) {
      console.log('Unable to scan directory: ' + err);
      return res.sendStatus(500);
    }

    let pictures = [];

    files.forEach((file) => {
      if(path.extname(file) === '.jpg' || path.extname(file) === '.jpeg' || path.extname(file) === '.png') {
        pictures.push(file);
      }
    });

    res.render('index', { pictures });
  });
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
