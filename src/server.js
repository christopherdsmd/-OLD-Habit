const express = require('express');
const app = express();

app.use(express.static('frog_photos'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});