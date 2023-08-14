const Joi = require('joi');

const PostProductPayloadSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
    productLink: Joi.string().required(),
    thumbnailUrl: Joi.string().required(),
    videoId: Joi.string().required()
})

module.exports = {
    PostProductPayloadSchema,
}