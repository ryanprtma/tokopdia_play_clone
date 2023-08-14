const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    product_link: {
        required: true,
        type: String
    },
    thumbnail_url: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    video_id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Videos'
    }
}, {
    timestamps: true,
})

const Product = mongoose.model('Products', productschema);

module.exports = Product;