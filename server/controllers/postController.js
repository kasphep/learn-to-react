const {Post} = require('../models/models');
const ApiError = require('../error/ApiError');
const path = require('path');
const uuid = require('uuid');

class PostController {
    async create(req, res, next) {
        try {
            const {text} = req.body;
            const {enclosure} = req.body;
            const post = await Post.create({text, enclosure});
            return res.json(post);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res, next) {
        try {
            let {text, enclosure, likes, userId, limit, page} = req.query;
            let posts = "";
            page = page || 1;
            limit = limit || 999;
            let offset = (page-1)*limit;
            if(!text && !enclosure && !likes && !userId) {
                posts = await Post.findAll({limit, offset});
                return res.json(posts);
            } else {
                if(text) posts += await Post.findAll({where: {text}, limit, offset});
                if(enclosure) posts += await Post.findAll({where: {enclosure}, limit, offset});
                if(likes) posts += await Post.findAll({where: {likes}, limit, offset});
                if(userId) posts += await Post.findAll({where: {userId}, limit, offset});
                return res.json(posts);
            }
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getOne(req, res, next) {
        try {
            res.status(200).json({message: 'Post checked'});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new PostController();