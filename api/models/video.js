const mongoose = require('mongoose');

const videoschema = new mongoose.Schema({
    thumbnail_url: {
        required: true,
        type: String
    },
})

const Video = mongoose.model('Videos', videoschema);

class Videos{
    constructor(){
    }

    async getVideos(){
        try{
           const result = await Video.find();
           return result;
        }
        catch(error){
            throw error
        }
    }

    async getVideoById(id){
        try{
           const result = await Video.findById(id);
           return result;
        }
        catch(error){
            throw error
        }
    }
}

module.exports = Videos;