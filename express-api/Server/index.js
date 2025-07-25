const express = require('express')
const app = express();

const port = 3000;

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next();
})

// Routes

app.get('/', (req, res) => {
    res.send('Welcome to the Express API');
})

app.get('/about', (req, res) => {
    res.send("This is about page")
})

app.get('/contact', (req, res) => {
    res.send("This is Contact page")
})

app.get('/services', (req, res) => {
    res.send("This is Services page")
})

// error 
app.use((req, res) => {
    res.status(404).send('404: Route Not Found');
});

// Start Server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`)
})
