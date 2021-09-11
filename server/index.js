import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import postsRoutes from './routes/posts.js'


const server=express();



server.use(bodyParser.json({limit:"30mb",extended:true}));
//server.use(bodyParser.urlencoded({limit:"30mb",extended:true}));

server.use(cors());

// Routes

server.get('/test',(req,res)=>{
    console.log('got heart')
})
server.use(postsRoutes);

const CONNECTION_URL='mongodb+srv://USA:dilbarHussain@cluster0.nyvmn.mongodb.net/memory?retryWrites=true&w=majority';


const PORT=process.env.PORT|| 5000;






mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    server.listen(PORT);

})
.catch(error=>{
    console.log(error.message)
})

mongoose.set('useFindAndModify',false); 


