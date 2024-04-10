const express= require('express');
const morgan = require('morgan');
require('dotenv').config();
require('./database/connection');
const userRoute = require('./model/postuser');
const auth = require('./model/Auth');





const app = express();
const cors= require('cors');
app.use(morgan('dev'));
app.use(cors());

app.use('/admin', auth);
app.use('/admin', userRoute);


const PORT= process.env.PORT;
app.listen(PORT,() =>{
    console.log(`Server is running ${PORT}`);
})