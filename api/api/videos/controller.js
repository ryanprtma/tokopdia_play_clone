const VideosService = require('../../services/VideosService');
const CommentsService = require('../../services/CommentsService');
const ProductService = require('../../services/ProductsService');
const ClientError = require('../../exceptions/ClientError');
const commentValidator = require('../../validator/comments')

class VideosController {
    constructor(){
        this._service = new VideosService();
        this._commentService = new CommentsService();
        this._productService = new ProductService();
        this._commentValidator = commentValidator;
    }

    async getVideosController(req, res) {
        try {
            const videos = await this._service.getVideos();
            return res.status(200).json({data:{videos}});
        } catch(error) {
            if(error instanceof ClientError) {
                return res.status(error.statusCode).json({status: 'fail', message: error.message});

            }

            return res.status(500).json({status: 'error', message: 'Maaf, trjadi kegagalan pada server kami'});
        }
    }

    async getVideoByIdController(req, res) {
        try {
            const video = await this._service.getVideoById(req.params.id);
            return res.status(200).json({data:{video}});
        } catch(error) {
            if(error instanceof ClientError) {
                return res.status(error.statusCode).json({status: 'fail', message: error.message});
            }

            return res.status(500).json({status: 'error', message: 'Maaf, trjadi kegagalan pada server kami'});
        }
    }

    async getVideoCommentsByIdController(req, res) {
        try {
            const videoId = req.params.id;
            const comments = await this._commentService.getCommentsByVideoId(videoId);
            return res.status(200).json({data:{comments}});
        } catch(error) {
            if(error instanceof ClientError) {
                return res.status(error.statusCode).json({status: 'fail', message: error.message});
            }

            return res.status(500).json({status: 'error', message: 'Maaf, terjadi kegagalan pada server kami'});
        }
    }

    async postVideoCommentsByIdController(req, res) {
        try {
            this._commentValidator.validatePostCommentsPayload(req.body);
            const videoId = req.params.id;
            const { username, comment } = req.body;
            const result = await this._commentService.submitComments({username, comment, videoId:videoId});
            const commentId = result._id;

            return res.status(201).json({status:'succes', message: 'Komentar berhasil ditambahkan', data: {commentId}})
        } catch(error) {
            if(error instanceof ClientError) {
                return res.status(error.statusCode).json({status: 'validation failed', message: error.message});
            }

            return res.status(500).json({status: 'error', message: 'Maaf, trjadi kegagalan pada server kami'});
        }
    }

    async getVideoProductsByIdController(req, res) {
        try {
            const videoId = req.params.id;
            const products = await this._productService.getProductsByVideoId(videoId);
            return res.status(200).json({data:{products}});
        } catch(error) {
            if(error instanceof ClientError) {
                return res.status(error.statusCode).json({status: 'fail', message: error.message});

            }

            return res.status(500).json({status: 'error', message: 'Maaf, terjadi kegagalan pada server kami'});
        }
    }
}

module.exports = VideosController;