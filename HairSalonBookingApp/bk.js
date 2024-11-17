const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// ??t l?ch m?i
router.post('/', async (req, res) => {
    try {
        const { service, stylist, date, time, userId } = req.body;
        const booking = new Booking({ service, stylist, date, time, userId });
        await booking.save();
        res.status(201).json({ message: 'Booking created successfully!' });
    } catch (err) {
        res.status(400).json({ error: 'Error creating booking!' });
    }
});

// L?y danh sách l?ch h?n theo ng??i dùng
router.get('/:userId', async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.params.userId });
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching bookings!' });
    }
});

module.exports = router;
