const {User} = require('../models/models');
const ApiError = require('../error/ApiError');
const path = require('path');
const uuid = require('uuid');

class UserController {
    async registration(req, res, next) {
        try {
            const {login, password, name} = req.body;
            const {ava, obl} = req.files;
            const avaFileName = uuid.v4()+'.png';
            ava.mv(path.resolve(__dirname, '..', 'static', avaFileName));
            const oblFileName = uuid.v4() + '.png';
            obl.mv(path.resolve(__dirname, '..', 'static', oblFileName));
            const user = await User.create({login, password, name, ava: avaFileName, obl: oblFileName});
            return res.json(user);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async login(req, res, next) {
        try {
            res.status(200).json({message: 'Login completed'});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async check(req, res, next) {
        try {
            const query = req.query;
            if (!query.id) {
                return next(ApiError.badRequest("No ID"));
            }
            res.json(query);
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getOne(req, res, next) {
        try {
            res.status(200).json({message: 'Profile download'});
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res, next) {
        try {
            let {login, password, name, limit, page} = req.query;
            let users;
            page = page || 1;
            limit = limit || 999;
            let offset = (page-1)*limit;
            if(!login && !password && !name) {
                users = await User.findAll({limit, offset});
                return res.json(users);
            } else {
                if (login) users = await User.findAll({where: {login}, limit, offset});
                if (password) users = await User.findAll({where: {password}, limit, offset});
                if (name) users = await User.findAll({where: {name}, limit, offset});
                return res.json(users);
            }
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new UserController();