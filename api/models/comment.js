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

class Comments{
    constructor(){
    }

    async getComments() {
        try{
            const result = await Comment.find();
            return result;
        }
        catch(error){
            throw error
        }
    }

    async getCommentsByVideoId(videoId) {
        try{
            const result = await Comment.find({"video_id" : new mongoose.Types.ObjectId(videoId)});
            return result;
        }
        catch(error){
            throw error;
        }
    }

    async postComments(username, comments, videoId) {
        try{
            const comment = new Comment({
                username : username,
                comment : comments,
                video_id : videoId
            });

            const result = await comment.save();
            return result
        } catch(error) {
            throw error
        }
    }
}

module.exports = Comments;