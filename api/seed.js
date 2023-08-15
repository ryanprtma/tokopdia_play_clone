require('dotenv').config();
const Connection = require('./connection');
const mongoString = process.env.DATABASE_URL;
const { faker } = require('@faker-js/faker');

const mongoose = require('mongoose');

const videoschema = new mongoose.Schema({
    thumbnail_url: {
        required: true,
        type: String
    },
    url: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    views: {
        required: true,
        type: Number
    },
    store_name: {
        required: true,
        type: String
    }
})

const Video = mongoose.model('Videos', videoschema);

const commentsschema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    comment: {
        required: true,
        type: String
    },
    video_id: {
        required: false,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Videos'
    }
}, {
    timestamps: true,
})

const Comment = mongoose.model('Comments', commentsschema);


const productschema = new mongoose.Schema({
    product_link: {
        required: true,
        type: String
    },
    thumbnail_url: {
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
    discount: {
        require: false,
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

const numVideos = 10;

const seedData = async () => {
    try {
        const database = new Connection(mongoString);
        database.start();

        const videos = [];
        const products = [];
        const comments = [];

        const numProductsArr = [];
        const numCommentsArr = [];

        for (let i = 0; i < numVideos; i++) {
            const video = {
                title: faker.lorem.sentence(),
                thumbnail_url: faker.image.url(),
                url: faker.internet.url(),
                store_name: faker.commerce.department(),
                views: 0
            };
            videos.push(video);

            const numProducts = faker.number.int({ min: 5, max: 10 });
            numProductsArr.push(numProducts);
            for (let j = 0; j < numProducts; j++) {
                const product = {
                    title: faker.lorem.sentence(),
                    price: faker.commerce.price(),
                    discount: Math.floor(Math.random() * (90 - 50 + 1)) + 50,
                    product_link: faker.internet.url(),
                    thumbnail_url: faker.image.url()
                };
                products.push(product);
            }

            const numComments = faker.number.int({ min: 10, max: 20 });
            numCommentsArr.push(numComments);
            for (let k = 0; k < numComments; k++) {
                const comment = {
                    username: faker.internet.userName(),
                    comment: faker.lorem.paragraph(),
                };
                comments.push(comment);
            }
        }

        const insertedVideos = await Video.insertMany(videos);

        let productIndex = 0;
        let commentIndex = 0;
        for (let i = 0; i < numVideos; i++) {
            const videoId = insertedVideos[i]._id;

            const numProducts = numProductsArr[i];
            for (let j = 0; j < numProducts; j++) {
                products[productIndex].video_id = videoId;
                productIndex++;
            }

            const numComments = numCommentsArr[i];
            for (let k = 0; k < numComments; k++) {
                comments[commentIndex].video_id = videoId;
                commentIndex++;
            }
        }

        await Promise.all([
            Product.insertMany(products),
            Comment.insertMany(comments)
        ]);

        console.log("Seeding data successfully");
        database.stop();
        return { message: "Seeding data successfully" };
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

seedData();