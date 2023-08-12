const ProductsService = require('../../services/ProductsService');
const ClientError = require('../../exceptions/ClientError');
const validator = require('../../validator/products')

class ProductsController {
    constructor(){
        this._service = new ProductsService();
        this._validator = validator;
    }

    async postProductsController(req, res) {
        try {
            this._validator.validatePostProductPayload(req.body);
            const {title, price, productLink, videoId} = req.body;
            const result = await this._service.saveProduct({title, price, productLink, videoId});
            const producId = result._id
            return res.status(201).json({status:'succes', message: 'Produk berhasil ditambahkan', data: {producId}})
        } catch(error) {
            if(error instanceof ClientError) {
                return res.status(error.statusCode).json({status: 'fail', message: error.message});
            }

            return res.status(500).json({status: 'error', message: 'Maaf, terjadi kegagalan pada server kami'});
        }
    }
}

module.exports = ProductsController;