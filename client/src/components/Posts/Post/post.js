import React from 'react';
import useStyles from './style';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost } from '../../../actions/posts';



const Post =({ post, setCurrentId })=>{
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    
    return(
        <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt="Remy Sharp" src={post.selectedFile} />
          }
          action={
            <IconButton aria-label="settings" onClick={()=>setCurrentId(post._id)}>
              <MoreVertIcon />
            </IconButton>
          }
          title={post.creator}
          subheader={moment(post.createdAt).fromNow()}
        />
        <CardContent>
        
        </CardContent>
        <CardMedia
          className={classes.media}
          image={post.selectedFile}
          title={post.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p"> {post.message}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like" onClick={()=> dispatch(likePost(post._id))}>
            <FavoriteIcon fontSize='small' /> <h6>like { post.likeCount }</h6>
          </IconButton>
          <IconButton aria-label="dislike">
            <ThumbDownIcon fontSize='small' />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="comment"
          >
          <CommentIcon fontSize='small' />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comments:</Typography>
            <Typography paragraph>
             My fitrt comment
            </Typography>
            <Typography paragraph>
             My second comment
            </Typography>
            <Typography paragraph>
             My Third comment
            </Typography>
            <Typography>
              My fourth comment
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }

export default Post;