const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Telugu API Vault!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Telugu API Vault!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
