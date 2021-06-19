if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import router from './routes';

const app=express();
require('./database');
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/api',router);
app.set('port',process.env.PORT || 4000);

app.listen(app.get('port'),()=>{
    console.log('server on port ' + app.get('port'));
}); 