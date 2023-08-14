const InvariantError = require('../exceptions/InvariantError');
const Comment = require('../models/comment');

class CommentsService {
    async getComments() {
        try {
            const result = await Comment.find();
            return result;
        }
        catch (error) {
            throw error;
        }
    }

    async getCommentsByVideoId(videoId) {
        try {
            const result = await Comment.find({ "video_id": videoId }).sort({ "createdAt": -1 });
            return result;
        }
        catch (error) {
            throw error;
        }
    }

    async submitComments({ username, comment, videoId }) {
        try {
            const newComment = new Comment({
                username: username,
                comment: comment,
                video_id: videoId
            });

            const result = await newComment.save();

            if (!result) {
                throw new InvariantError('Komentar gagal ditambahkan')
            }

            return result
        } catch (error) {
            throw error
        }
    }
}

module.exports = CommentsService;