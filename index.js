const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

app.get('/posts', (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port', process.env.PORT || 3000);
});
