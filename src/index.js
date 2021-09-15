import express from 'express';

const server = express();
const port   = 3040;

server.get('/', (req, res) => res.json({ value: 'Hello world!' }));

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
