import routerx from 'express-promise-router';
const clasificacionRouter = require('./clasification')
const movieRouter = require('./movie')

const router=routerx();

router.use('/Clasificacion',clasificacionRouter);
router.use('/Peliculas',movieRouter);
export default router;