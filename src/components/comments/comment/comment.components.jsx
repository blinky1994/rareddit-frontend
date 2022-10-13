import Upvote from '../../../assets/arrow-up-bold.svg';
import Downvote from '../../../assets/arrow-down-bold.svg';
import ProfileIcon from '../../profile-icon/profile-icon.components';
import './comment.styles.scss'
import { handleUpvote, handleDownvote } from '../../../utils/posts-functions';
import Button, { BUTTON_TYPE_CLASSES, ICON_TYPE_CLASSES } from '../../button/button.component';
import { Link } from 'react-router-dom';

const postDetails = {};
const localHandleUpvote = (event) => {
    handleUpvote(event, postDetails);
  } 

  const localHandleDownvote = (event) => {
    handleDownvote(event, postDetails);
  } 

const Comment = 
({ postID, userName, dateTime, content, noOfLikes, hierarchyLevel}) => {
    const objs = [];
    for (let i = 0; i < hierarchyLevel; i++) {
        objs.push({});
    };

  return (
    <div className="comment-container">
        {
            objs.map((obj, index) => (           
            <div>
                <div className="comment-line-box">
                    <div className="comment-line" />
                </div>
            </div>
            ))
        }

        
        <div className="comment-left-section">
            <div className="comment-profile-icon">
                <ProfileIcon />
            </div>
            <div className="comment-line-box">
             <div className="comment-line" />
            </div>
        </div>
        <div className="comment-right-section">
            <div className="comment-headers">
            <span>
                <Link><span className='comment-username'>{userName}</span></Link> 
                &#8226; {dateTime}
                </span>
            </div>
            <div className="comment-content">
                <p>{content}</p>
            </div>
            <div className="comment-actions">
                <img id='upvote' src={Upvote} alt='vote-icon' onClick={localHandleUpvote} className='deactivated' />
                <span>{noOfLikes}</span>
                <img id='downvote' src={Downvote} alt='vote-icon' onClick={localHandleDownvote} className='deactivated'/>
                {/* Comment Button */}
                <Button
                buttonType={BUTTON_TYPE_CLASSES.postAction}
                iconType={ICON_TYPE_CLASSES.comment}
                >Reply</Button>

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

export default Comment