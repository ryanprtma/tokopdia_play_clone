const mongoose = require('mongoose');

const videoschema = new mongoose.Schema({
    thumbnail_url: {
        required: true,
        type: String
    },
    url: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    views: {
        required: true,
        type: Number
    },
    store_name: {
        required: true,
        type: String
    }
})

const Video = mongoose.model('Videos', videoschema);

module.exports = Video;