import './post.styles.scss';
import Upvote from '../../assets/arrow-up-bold.svg';
import Downvote from '../../assets/arrow-down-bold.svg';
import ProfileIcon from '../profile-icon/profile-icon.components';
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES, ICON_TYPE_CLASSES } from '../button/button.component';
import { UserContext } from '../../context/user.context';
import { useContext, useState } from 'react';
import { 
  handlePostUpvote,
  handlePostDownvote, 
  getUpVoteButtonClassName, 
  getDownVoteButtonClassName,
  initializePostLikesCheck
} from '../../utils/posts-functions';
import { PostsContext } from '../../context/posts.context';
import { useNavigate } from 'react-router-dom';

const Post = ({postID, title, userName, dateTime, content, noOfLikes, navigation, isHomePage}) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { posts, setPosts } = useContext(PostsContext);
  const [ postLikes, setPostLikes ] = useState(noOfLikes);
  const [ renderOnce, setRenderOnce ] = useState(false);
  
  const postDetails = {
    postID, postLikes,
    user, setUser,
    posts, setPosts,
    setPostLikes
  }

  if (isHomePage) {
    if (content.length > 550) {
      content = content.slice(0, 550);
      content += '...';
    }
  }


  if (!renderOnce) {
      initializePostLikesCheck(postDetails);
      setRenderOnce(true);
  }
  
  const localHandleUpvote = () => {
    handlePostUpvote(postDetails);
  } 

  const localHandleDownvote = () => {
    handlePostDownvote(postDetails);
  } 

  const navigateHandler = () => {
    if (navigation === 'navigation-allowed')
     navigate(`/${postID}`)
  }


  return (
    <div className='post-container'>
      <div className='upvote-section'>
        <img id='upvote' src={Upvote} alt='vote-icon' onClick={localHandleUpvote} className={getUpVoteButtonClassName(postID, user)} />
        <span>{noOfLikes}</span>
        <img id='downvote' src={Downvote} alt='vote-icon' onClick={localHandleDownvote} className={getDownVoteButtonClassName(postID, user)}/>
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
        <div className={`${navigation}`} onClick={navigateHandler}>
        <div className='post-content'>
          <h3>{title}</h3>
            <p>{content}</p>
        </div>
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