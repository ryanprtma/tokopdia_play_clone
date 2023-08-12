const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    product_link: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    video_id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Videos'
    }
}, {
    timestamps: true,
})

const Product = mongoose.model('Products', productschema);

class Products{
    constructor(){
    }

    async getProducts() {
        try{
            const result = await Product.find();
            return result;
        }
        catch(error){
            throw error
        }
    }

    async getProductsByVideoId(videoId) {
        try{
            const result = await Product.find({"video_id" : new mongoose.Types.ObjectId(videoId)});
            return result;
        }
        catch(error){
            throw error;
        }
    }

    async postProduct(title, price, productLink, videoId) {
        try{
            const product = new Product({
                title : title,
                price : price,
                product_link : productLink,
                video_id : videoId
            });

            const result = await product.save();
            return result
        } catch(error) {
            throw error
        }
    }
}

module.exports = Products;