import './post.styles.scss';
import Upvote from '../../assets/arrow-up-bold.svg';
import Downvote from '../../assets/arrow-down-bold.svg';
import ProfileIcon from '../profile-icon/profile-icon.components';
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES, ICON_TYPE_CLASSES } from '../button/button.component';
import { UserContext } from '../../context/user.context';
import { useContext, useState } from 'react';
import { UpdatePostLikes } from '../../utils/posts-functions';
import { PostsContext } from '../../context/posts.context';

const Post = ({postID, title, userName, dateTime, content, noOfLikes}) => {
  const { user, setUser } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);
  const [ currentNoOfLikes ] = useState(noOfLikes);
  const [ upvoteEvent, setUpvoteEvent ] = useState();
  const [ downvoteEvent, setDownvoteEvent ] = useState();
  const [ lastVoteAction, setLastVoteAction ] = useState();

  const handleUpvote = (event) => {
    setUpvoteEvent(event);
    if (checkIfUserHasLiked(postID)) {
      if (lastVoteAction === 'downvote'){
        setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes + 1));
        event.target.className = 'activated';
        downvoteEvent.target.className='deactivated';
      } else {
        setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes));
        event.target.className = 'deactivated';
        unregisterLike(postID);
      }
      updateUser(postID, 'upvote');
      setLastVoteAction('upvote');
      return;
    };
    setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes + 1));
    updateUser(postID, 'upvote');
    setLastVoteAction('upvote');
    event.target.className = 'activated';
  }

  const handleDownvote = (event) => {
    setDownvoteEvent(event);
    if (checkIfUserHasLiked(postID)) {
      if (lastVoteAction === 'upvote'){
        setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes - 1));
        event.target.className = 'activated';
        upvoteEvent.target.className='deactivated';
      } else {
        setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes));
        event.target.className = 'deactivated';
        unregisterLike(postID)
      }
      updateUser(postID, 'downvote');
      setLastVoteAction('downvote');
      return;
    };
    setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes - 1));
    event.target.className = 'activated';
    updateUser(postID, 'downvote');
    setLastVoteAction('downvote');
  }

  const updateUser = (postID, voteType) => {
    if (user.likedPosts.includes(postID)){
      return;
    }
    setUser({...user, 
      likedPosts: [...user.likedPosts, postID],
      likedPostsType: [...user.likedPostsType, voteType + postID]
     });
  }

  const checkIfUserHasLiked = (postID) => {
    return user.likedPosts.includes(postID) ? true: false;
  }

  const unregisterLike = (postID) => {
    console.log('unregistered');
    user.likedPosts.forEach((oldPostID, index) => {
      if (oldPostID === postID)
      {
        setUser(
          {...user, 
            likedPosts: 
            user.likedPosts.filter(oldPostID => oldPostID !== postID),

            likedPostsType: 
            user.likedPostsType.filter
            (oldVoteID => oldVoteID !== user.likedPostsType[index]),
          })
      }
    })
  }

  return (
    <div className='post-container'>
      <div className='upvote-section'>
        <img id='upvote' src={Upvote} alt='vote-icon' onClick={handleUpvote} className='deactivated' />
        <span>{noOfLikes}</span>
        <img id='downvote' src={Downvote} alt='vote-icon' onClick={handleDownvote} className='deactivated'/>
      </div>

      <div className='content-section'>

        <div className='post-headers'>
            <ProfileIcon />
            <Link>
              <span>r/fakereddit</span>
            </Link>
              &#8226;
              <span>Posted by <Link>{userName}</Link> {dateTime} </span>

        </div>

        <div className='post-content'>
          <h3>{title}</h3>
            <p>{content}</p>
        </div>

        <div className='post-actions'>
          {/* Comment Button */}
          <Button
           buttonType={BUTTON_TYPE_CLASSES.postAction}
           iconType={ICON_TYPE_CLASSES.comment}
           >Comment</Button>

          {/* Award Button */}
          <Button
           buttonType={BUTTON_TYPE_CLASSES.postAction}
           iconType={ICON_TYPE_CLASSES.award}
           >Award</Button>

          {/* Share Button */}
          <Button
           buttonType={BUTTON_TYPE_CLASSES.postAction}
           iconType={ICON_TYPE_CLASSES.share}
           >Share</Button>
            
           
        </div>
      </div>
    </div>
  )
}

export default Post