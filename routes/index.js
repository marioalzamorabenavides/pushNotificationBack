const { Router } = require('express');
const router = Router();

const controller = require('../controllers/index');

router.post('/push-register', controller.pushRegister);

router.post('/push-unregister', controller.pushUnRegister);

router.get('/resource', controller.loadResource);

router.post('/resource', controller.saveResource);

module.exports = router;