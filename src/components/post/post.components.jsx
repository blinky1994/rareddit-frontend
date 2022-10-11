import './post.styles.scss';
import Upvote from '../../assets/arrow-up-bold.svg';
import Downvote from '../../assets/arrow-down-bold.svg';
import ProfileIcon from '../profile-icon/profile-icon.components';
import { Link } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES, ICON_TYPE_CLASSES } from '../button/button.component';

const Post = ({title, user, time, postContent}) => {
  return (
    <div className='post-container'>
      <div className='upvote-section'>
        <img src={Upvote} alt='vote-icon' />
        <span>12.3K</span>
        <img src={Downvote} alt='vote-icon' />
      </div>

      <div className='content-section'>

        <div className='post-headers'>
            <ProfileIcon />
            <Link>
              <span>r/subreddit</span>
            </Link>
              &#8226;
              <span>Posted by <Link>{user}</Link> {time} ago </span>

        </div>

        <div className='post-content'>
          <h3>{title}</h3>
            <p>{postContent}</p>
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
            
           
        </div>
      </div>
    </div>
  )
}

export default Post