import routerx from 'express-promise-router';
import movieController from '../controllers/MovieController';

const router=routerx();

router.post('/',movieController.add);
router.get('/:id',movieController.query);
router.get('/',movieController.list);
router.put('/:id',movieController.update);
router.delete('/:id',movieController.remove);
router.put('/activate',movieController.activate);
router.put('/deactivate',movieController.deactivate);

export default router;