const Router = require('express');
const router = new Router();
const DialogController = require('../controllers/dialogController');

router.post('/', DialogController.create);
router.get('/', DialogController.getAll);
router.get('/:id', DialogController.getOne);


module.exports = router;