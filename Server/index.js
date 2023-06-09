import express from  'express';
import Connect from './database/db.js';
import cors from 'cors';
import Routes from './routes/route.js'
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/', Routes)
Connect();
app.listen(4000, ()=>{
    console.log('server is running on port 4000');
})

