import {fetchPosts,createPost}from '../Api/index'


export const getPosts=()=>async (dispatch)=>{
    try{
        const {data}= await fetchPosts();
        console.log(data);
        dispatch({type:'FETCH_ALL',payload:data})
    }
    
    catch(error){
        console.log('error in dispatching');
    }

}


export const makePost=post=>async (dispatch)=>{
    try{
        const {data}=await createPost(post);
        console.log(post);
        dispatch({type:'CREATE',payload:data})
    }
    
    catch(error){
        console.log('error in dispatching');
    }

}