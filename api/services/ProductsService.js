const InvariantError = require('../exceptions/InvariantError');
const Product = require('../models/product');

class ProductsService {
    async getProductsByVideoId(videoId) {
        try {
            const result = await Product.find({ "video_id": videoId });
            return result;
        }
        catch (error) {
            throw error;
        }
    }

    async saveProduct({ title, price, productLink, thumbnailUrl, videoId }) {
        try {
            const product = new Product({
                title: title,
                price: price,
                product_link: productLink,
                thumbnail_url: thumbnailUrl,
                video_id: videoId
            });

            const result = await product.save();

            if (!result) {
                throw new InvariantError('Produk gagal ditambahkan')
            }

            return result
        } catch (error) {
            console.log(error);
            throw error
        }
    }
}

module.exports = ProductsService;