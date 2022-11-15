const { Router } = require('express');
const UserComponent = require('./index');

const router = Router();

router.get('/:id', UserComponent.findOne);

router.post('/', UserComponent.create);

router.delete('/:id', UserComponent.deleteUser);

router.put('/:id', UserComponent.update);

module.exports = router;
