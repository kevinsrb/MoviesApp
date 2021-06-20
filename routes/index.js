// import routerx from 'express-promise-router';
// import clasificacionRouter from './clasification';
// import movieRouter from './movie';

let routerx = require('express-promise-router')
const clasificationRouter = require('./clasification.js')
const movieRouter = require('./movie.js')

const router=routerx();

router.use('/Clasificacion',clasificationRouter);
router.use('/Peliculas',movieRouter);


module.exports = router;