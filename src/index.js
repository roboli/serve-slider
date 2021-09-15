import express from 'express';
import path from 'path';

const server = express();
const port   = 3040;

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '/views'));

server.get('/', (req, res) => res.render('index'));

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
