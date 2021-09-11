import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose'
export const getPosts=async (req,res,next)=>{
    try{
    const posts=await postMessage.find();
        console.log('i got hit');
    return  res.status(200).jason(posts);

    }
    catch(error){
        res.status(404).jason({message:error.message});
    }
}



export const createPost=async (req,res,next)=>{
    console.log('got Hit');
    // const post=new PostMessage(req.body);
    console.log(req.body);
    res.status(200).jason(req.body);
    // try{
    // //    await post.save();
      
    //    res.status(200).jason(post);
    // }

    // catch(error){
    //     console.log('im here');
    //     res.status(404).jason({message:error.message});
    // }


}


export const updatePost=(req,res)=>{
    const {id}=req.params;
try{
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).jason('no post with this id found')
    }
    const post=PostMessage.findByIdAndUpdate(id,req.body,{new:true});
    return res.status.jason(post);
}
catch(error){
    res.json(404).jason({message:error.message});
}
}