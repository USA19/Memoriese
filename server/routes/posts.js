import express from 'express';
import {getPosts,createPost,updatePost} from '../Controllers/posts.js'

const router=express.Router();


router.get('/posts',getPosts);
router.post('/posts',createPost);
router.patch('/posts:id',updatePost);



export default router;