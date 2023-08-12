const {
    PostProductPayloadSchema,
} = require('./schema');

const InvariantError = require('../../exceptions/InvariantError')

const ProductsValidator = {
    validatePostProductPayload: (payload) => {
        const validationResult = PostProductPayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    },
}

module.exports = ProductsValidator;