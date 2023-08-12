const express = require('express');
const router = express.Router();
const VideosController = require('../../api/videos/controller')
const videosController = new VideosController()

router.get('/videos', async (req, res) => {
    await videosController.getVideosController(req, res);
});

router.get('/videos/:id', async (req, res) => {
    await videosController.getVideoByIdController(req, res);
});

router.get('/videos/:id/comments', async (req, res) => {
    await videosController.getVideoCommentsByIdController(req, res);
});

router.post('/videos/:id/comment', async (req, res) => {
    await videosController.postVideoCommentsByIdController(req, res);
});

router.get('/videos/:id/products', async (req, res) => {
    await videosController.getVideoProductsByIdController(req, res);
})

module.exports =  router;