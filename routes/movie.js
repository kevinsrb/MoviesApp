//import routerx from 'express-promise-router';
const routerx = require('express-promise-router')
const movieController = require('../controllers/MovieController')

const router=routerx();

router.post('/',movieController.add);
router.get('/:id',movieController.query);
router.get('/',movieController.list);
router.put('/:id',movieController.update);
router.delete('/:id',movieController.remove);
router.put('/activate',movieController.activate);
router.put('/deactivate',movieController.deactivate);

module.exports = router;