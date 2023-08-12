const Videos = require('../models/video');
const NotFoundError = require('../exceptions/NotFoundError');

class VideosService {
    constructor() {
        this._video = new Videos()
    }

    async getVideos() {
        const videos = await this._video.getVideos();
        return videos;
    }

    async getVideoById(id) {
        const video = await this._video.getVideoById(id);

        if (!video) {
            throw new NotFoundError('Video tidak ditemukan');
        }

        return video;

    }
}

module.exports = VideosService;