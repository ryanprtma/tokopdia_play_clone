const Video = require('../models/video');
const NotFoundError = require('../exceptions/NotFoundError');

class VideosService {
    async getVideos(req) {
        try {
            if (req.body.search != null) {
                const result = await Video.find({ "title": new RegExp(req.body.search, 'i') });
                return result;
            }

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

            await this.addViews(result);

            return result;
        } catch (error) {
            throw error
        }
    }

    async addViews(video) {
        let currentviews = video.views ?? 0;
        currentviews += 1;
        try {
            const result = await Video.findByIdAndUpdate(video.id, { views: currentviews }, { new: true });

            if (!result) {
                throw new NotFoundError('Video tidak ditemukan');
            }
        } catch (error) {
            throw error
        }
    }
}

module.exports = VideosService;