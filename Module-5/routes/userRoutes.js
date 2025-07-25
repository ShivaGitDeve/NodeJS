const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'shivaSuperSecretKey';
const authMiddleware = require('../middleware/authMiddleware')

// create
router.post('/', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ message: '✅ User created', user });
    } catch (err) {
        console.error("❌ Create User Error:", err);

        if (err.code === 11000) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        if (err.name === 'ValidationError') {
            const errors = Object.values(err.errors).map(e => e.message);
            return res.status(400).json({ error: errors });
        }

        res.status(500).json({ error: 'Server Error' });
    }
});

// 🔐 LOGIN ROUTE
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // 1. Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        // 2. Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ userID: user.id }, JWT_SECRET, {
            expiresIn: '1h'
        })

        // 3. Success
        res.status(200).json({
            message: '✅ Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (err) {
        console.error('Login Error:', err);
        res.status(500).json({ error: 'Server Error' });
    }
});


// ✅ Protected route
router.get('/profile', authMiddleware, async (req, res) => {
    res.json({ message: '🛡️ Protected Route Accessed', userId: req.user.userId });
});

// read all
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json({ users })
})

// read one
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' })
        res.json({ user });
    } catch (error) {
        res.status(404).json({ error: 'Invalid id' })
    }
})

// update
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        console.log('Updating ID:', req.params.id);


        res.json({ message: 'User updated', user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


//delete

router.delete('/:id', async (req, res) => {
    try {
        const user = await Users.findByIDAndDelete(req.body)
        if (!user) return res.status(404).json({ error: 'User not found' })
        res, json({ message: 'User deleted' })

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

module.exports = router;