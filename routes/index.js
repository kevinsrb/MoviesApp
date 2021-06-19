import routerx from 'express-promise-router';
import clasificacionRouter from './clasification';
import movieRouter from './movie';

const router=routerx();

router.use('/Clasificacion',clasificacionRouter);
router.use('/Peliculas',movieRouter);
export default router;