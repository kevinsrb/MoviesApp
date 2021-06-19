import routerx from 'express-promise-router';
const clasificationController = require('../controllers/clasificationController');

const router=routerx();

router.post('/',clasificationController.add);
router.get('/:id',clasificationController.query);
router.get('/',clasificationController.list);
router.put('/:id',clasificationController.update);
router.delete('/:id',clasificationController.remove);
router.put('/activate',clasificationController.activate);
router.put('/deactivate',clasificationController.deactivate);

export default router;