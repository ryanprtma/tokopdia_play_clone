const Joi = require('joi');

const PostCommentPayloadSchema = Joi.object({
    username: Joi.string().required(),
    comment: Joi.string().required(),
})

module.exports = {
    PostCommentPayloadSchema
}