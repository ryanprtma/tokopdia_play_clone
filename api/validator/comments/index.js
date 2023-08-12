const {
    PostCommentPayloadSchema
} = require('./schema');

const InvariantError = require('../../exceptions/InvariantError')

const CommentsValidator = {
    validatePostCommentsPayload: (payload) => {
        const validationResult = PostCommentPayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    }
}

module.exports = CommentsValidator;