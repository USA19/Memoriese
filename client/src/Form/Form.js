import React,{useState} from 'react';


import useStyles from './styles';
import {TextField,Button,Typography,Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {makePost} from '../Action/Post';
import {useDispatch} from 'react-redux';


export default function Form() {
  
    const [postData,setPostData]=useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    });
const classes=useStyles();

const dispatch=useDispatch();
const onFormSubmit=event=>{
    event.preventDefault();
    dispatch(makePost(postData));
    onFormClear();
}

const onFormClear=()=>{
   setPostData({
    creator:'',
    title:'',
    message:'',
    tags:'',
    selectedFile:''
   }); 
}
    return (
        <div>
           <Paper className={classes.paper}>
                <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={onFormSubmit}>
                    <Typography variant="h6">Creating a memory</Typography>

                    <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} 
                        onChange={e=>setPostData({...postData,creator:e.target.value})}
                    />

                     <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} 
                        onChange={e=>setPostData({...postData,title:e.target.value})}
                    /> 

                    <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} 
                        onChange={e=>setPostData({...postData,message:e.target.value})}
                    />
                     <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} 
                        onChange={e=>setPostData({...postData,tags:e.target.value})}
                    />

                    <div className={classes.fileInput}>
                        <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>
                    </div>
                    <Button type="submit" color="primary" variant="contained" size="large" className={classes.buttonSubmit} fullWidth>submit</Button>
                    <Button type="button" color="secondary" variant="contained" size="small" className={classes.buttonSubmit} fullWidth onClick={onFormClear}>clear</Button>
                </form>
           </Paper>
        </div>
    )
}
