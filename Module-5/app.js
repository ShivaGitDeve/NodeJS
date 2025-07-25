const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')
const uploadRoutes = require('./routes/uploadRoutes')

const app = express();
const PORT = 3000;

app.use(express.json())
app.use('/uploads', express.static('uploads'));
app.use('/upload', uploadRoutes)
app.use('/users', userRoutes)

// error
app.use((err, req, res, next) => {
    console.error('error', err.stack)
    res.status(500).json({ error: 'Something went wrong' })
})

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('🔥 Error:', err.message);
    res.status(500).json({ error: 'Server Error' });
});

//mongo connect
mongoose.connect('mongodb://localhost:27017/backendDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('✅ Connected to MongoDB');
        app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));
    })
    .catch(err => console.error('❌ MongoDB Error:', err));