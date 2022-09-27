import React from 'react';
import Post from './Post/post';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './style';



const Posts =({ setCurrentId })=>{

   const classes = useStyles();
    const posts = useSelector((state)=> state.posts);

    console.log(posts);

    return(
        !Post.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post)=>(
                    <Grid item xs={12} sm={6} key={posts._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;