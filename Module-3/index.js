const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Parse JSON body
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Routes
app.get('/', (req, res) => res.send('Welcome to Express API'));

app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

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

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!password || !email) {
        return res.status(400).json({ error: 'Pasaword are required' });
    }

    const login = {
        password
    }

    res.status(201).json({
        message: "User Login successfully",
        // login
    })

})

// 404
app.use((req, res) => {
    res.status(404).send('404: Route Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
