const express = require('express');
const http = require('http');

const path = require('path');

const app = express();
const port = 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor.`);
});

//gift

app.use('/public', express.static(path.join(__dirname, 'public')));
