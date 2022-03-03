const express = require('express');
const app = express();
const port = 3000;

//refers to the query string, below is the short version of an anonymous function 
app.get('/about', (req, res) => {
  res.send('About page, from Express!');
});

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
