const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

app.get('/posts', (req, res) => {
  res.json(data);
});

app.get('/multiply/:number', (req, res) => {
    const number = parseInt(req.params.number);
    console.log(number);
    const result = number * 5 +' hello';
    fs.appendFileSync('data.json', JSON.stringify(result) + ',\n');
    res.json({ result , req});
  });
  

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port', process.env.PORT || 3000);
});
