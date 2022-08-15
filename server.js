const express = require('express');

const node_port = process.env.PORT || 8082;

const app = express();
const path = require('path');

app.use('', express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(node_port, () => {});
