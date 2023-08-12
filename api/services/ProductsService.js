const InvariantError = require('../exceptions/InvariantError');
const Products = require('../models/product');

class ProductsService {
    constructor() {
        this._products = new Products()
    }

    async getProductsByVideoId(videoId) {
        const productss = await this._products.getProductsByVideoId(videoId);
        return productss;
    }

    async saveProduct({ title, price, productLink, videoId }) {
        const savedProduct = await this._products.postProduct(title, price, productLink, videoId);
        const result = savedProduct;

        if (!result) {
            throw new InvariantError('Produk gagal ditambahkan')
        }

        return result;
    }
}

module.exports = ProductsService;