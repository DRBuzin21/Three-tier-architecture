const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { username: '1', password: '1' },
  { username: '2', password: '2' },
];

function authenticateUser2(username, password) {
  const user = users.find((user) => user.username === username && user.password === password);
  return !!user; // Return true if user is found, false otherwise
}

app.post('/api/authenticate', (req, res) => {
  const { username, password } = req.body;

  const isAuthenticated = authenticateUser2(username, password);

  if (isAuthenticated) {
    res.json({ message: 'Authentication successful', success: true });
  } else {
    res.json({ message: 'Authentication failed', success: false });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});