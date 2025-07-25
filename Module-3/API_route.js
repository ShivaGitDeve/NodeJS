const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // For parsing JSON body

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  // Simulate user creation
  const user = {
    id: Date.now(),
    name,
    email
  };

  res.status(201).json({
    message: "User created successfully",
    user
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
