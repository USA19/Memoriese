import React from 'react';
import Post from './Post/Post';
import {useSelector} from 'react-redux';
import useStyles from './styles';
import {Grid,CircularProgress} from '@material-ui/core';


export default function Posts() {
  
const classes=useStyles();
const posts = useSelector(state => state.posts)

    return (
        posts.length===0?<CircularProgress/>:(
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {posts.map(post=> (
                    <Grid id={post._id} item xs={12} sm={6}>
                        <Post post={post}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}
