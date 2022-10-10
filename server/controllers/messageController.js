const {Message} = require('../models/models');
const ApiError = require('../error/ApiError');
const path = require('path');
const uuid = require('uuid');

class MessageController {
    async create(req, res, next) {
        try {
            const {text, enclosure, dialogId, userId} = req.body;
            let fileName = null;
            if(enclosure) {
                fileName = uuid.v4()+'.png';
                enclosure.mv(path.resolve(__dirname, '..', 'static', fileName));
            }
            const message = await Message.create({text, enclosure: fileName, dialogId, userId});
            return res.json(message);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res, next) {
        try {
            let {text, enclosure, likes, dialogId, userId, limit, page} = req.query;
            let messages = "";
            page = page || 1;
            limit = limit || 999;
            let offset = (page-1)*limit;
            if(!text && !enclosure && !likes && !userId && !dialogId) {
                messages = await Message.findAll({limit, offset});
                return res.json(messages);
            } else {
                if(text) messages = await Message.findAll({where: {text}, limit, offset});
                if(enclosure) messages = await Message.findAll({where: {enclosure}, limit, offset});
                if(likes) messages = await Message.findAll({where: {likes}, limit, offset});
                if(userId) messages = await Message.findAll({where: {userId}, limit, offset});
                if(dialogId) messages = await Message.findAll({where: {dialogId}, limit, offset});
                return res.json(messages);
            }
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getOne(req, res, next) {
        try {
            res.status(200).json({message: 'Message checked'});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new MessageController();