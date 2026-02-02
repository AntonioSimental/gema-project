const express = require('express');
const registerRouter = express.Router();
const registerAuth = require('../middlewares/registerAuth.js');
const registerController = require('../controllers/registerController.js');

registerRouter.post('/', registerAuth, registerController);

module.exports = registerRouter;