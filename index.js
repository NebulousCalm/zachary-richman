const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('wrong server running, use nextjs one!');
});

app.listen(3000, () => {
  console.log('server started');
});