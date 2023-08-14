const mongoose = require('mongoose');

const commentsschema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    comment: {
        required: true,
        type: String
    },
    video_id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Videos'
    }
}, {
    timestamps: true,
})

const Comment = mongoose.model('Comments', commentsschema);

module.exports = Comment;