const InvariantError = require('../exceptions/InvariantError');
const Comments = require('../models/comment');

class CommentsService {
    constructor() {
        this._comment = new Comments()
    }

    async getComments() {
        const comments = await this._comment.getComments();
        return comments;
    }

    async getCommentsByVideoId(videoId) {
        const comments = await this._comment.getCommentsByVideoId(videoId);
        return comments;
    }

    async submitComments({ username, comment, videoId }) {
        const saveComments = await this._comment.postComments(username, comment, videoId);
        const result = saveComments;

        if (!result) {
            throw new InvariantError('Komentar gagal ditambahkan')
        }

        return result;
    }
}

module.exports = CommentsService;