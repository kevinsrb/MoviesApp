// import routerx from 'express-promise-router';
// import clasificacionRouter from './clasification';
// import movieRouter from './movie';

const routerx = require('express-promise-router')
const clasificationRouter = require('./clasification.js')
const movieRouter = require('./movie.js')

const router=routerx();

router.use('/Clasificacion',clasificationRouter);
router.use('/Peliculas',movieRouter);


module.export = router;