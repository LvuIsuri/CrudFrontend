import express,{ Router } from 'express';
import mongoose from 'mongoose';
import route  from './route/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json({ extended :true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', route);



const Port = 8000;
const URL = 'mongodb://admin:PuGPXjdiQykB0wSU@cluster0-shard-00-00.31hwm.mongodb.net:27017,cluster0-shard-00-01.31hwm.mongodb.net:27017,cluster0-shard-00-02.31hwm.mongodb.net:27017/CrudApp?ssl=true&replicaSet=atlas-10swoq-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(URL,  { useNewUrlParser: true , useUnifiedTopology: true }).then(() => {
    app.listen( Port, () =>{
        console.log(`Server is running succesfully on Port ${Port}`)
    });
}).catch(error => {
    console.log('Error', error.message) ;
})
