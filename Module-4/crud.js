const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = []; // 🧠 Memory storage (will reset when server restarts)

// CREATE - POST /users
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const user = { id: Date.now().toString(), name, email };
  users.push(user);

  res.status(201).json({ message: 'User created', user });
});

// READ ALL - GET /users
app.get('/users', (req, res) => {
  res.status(200).json({ users });
});

// READ ONE - GET /users/:id
app.get('/users/:id', (req, res) => {
  const user = users.find((u) => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(200).json({ user });
});

// UPDATE - PUT /users/:id
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body;
  const user = users.find((u) => u.id === req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (name) user.name = name;
  if (email) user.email = email;

  res.status(200).json({ message: 'User updated', user });
});

// DELETE - DELETE /users/:id
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex((u) => u.id === req.params.id);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  users.splice(userIndex, 1);

  res.status(200).json({ message: 'User deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
