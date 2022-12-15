const { Router } = require('express');
const UserComponent = require('./index');
const handler = require('../../config/handler');

const router = Router();

router.get('/:id', handler.handler(UserComponent.findOne));

router.post('/', handler.handler(UserComponent.create));

router.delete('/:id', handler.handler(UserComponent.deleteUser));

router.put('/:id', handler.handler(UserComponent.update));

module.exports = router;
