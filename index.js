const express = require('express');
const app = express();
const port = 9999;

app.get('/', (req, res) => {
  res.send('Hello from Express with auto-reload!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});