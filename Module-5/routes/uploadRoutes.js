const express = require('express')
const router = express.Router()
const upload = require('../middleware/uploadMiddleware')

router.post('/', (req, res, next) => {
    upload.single('image')(req, res, (err) => {
        if (err) {
            return next(err)
        }
        res.status(201).json({ message: 'File uploaded', file: req.file })
    })
})

module.exports = router;