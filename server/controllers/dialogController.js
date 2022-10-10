const {Dialog} = require('../models/models');
const ApiError = require('../error/ApiError');

class DialogController {
    async create(req, res, next) {
        try {
            res.status(200).json({message: 'Dialog created'});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res, next) {
        try {
            let {userId, limit, page} = req.query;
            let dialogs;
            page = page || 1;
            limit = limit || 999;
            let offset = (page-1)*limit;
            if (!userId) {
                dialogs = await Dialog.findAll({limit, offset});
                return res.json(dialogs);
            } else {
                dialogs = await Dialog.findAll({where: {userId}, limit, offset});
                return res.json(dialogs);
            }
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getOne(req, res, next) {
        try {
            res.status(200).json({message: 'Dialog checked'});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new DialogController();