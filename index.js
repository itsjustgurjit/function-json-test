const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const data = {
  "posts": [
    {
      "id": 1,
      "title": "Post 1",
      "body": "This is post 1"
    },
    {
      "id": 2,
      "title": "Post 2",
      "body": "This is post 2"
    },
    {
        "id": 3,
        "title": "Post 3",
        "body": "This is post 3"
      }
  ]
};

app.get('/posts', (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening on port', process.env.PORT || 3000);
});
