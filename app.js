const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, CI/CD from Node.js!');
});

// Only start the server if not in test mode
if (require.main === module) {
  const port = 3000;
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
}

module.exports = app;
