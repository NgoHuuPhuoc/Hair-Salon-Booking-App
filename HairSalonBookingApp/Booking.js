const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    service: { type: String, required: true },
    stylist: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
