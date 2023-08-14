const Video = require('../models/video');
const NotFoundError = require('../exceptions/NotFoundError');

class VideosService {
    async getVideos() {
        try {
            const result = await Video.find();
            return result;
        } catch (error) {
            throw error
        }
    }

    async getVideoById(id) {
        try {
            const result = await Video.findById(id);
            if (!result) {
                throw new NotFoundError('Video tidak ditemukan');
            }
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = VideosService;