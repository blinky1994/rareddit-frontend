import './post.styles.scss';
import Upvote from '../../assets/arrow-up-bold.svg';
import Downvote from '../../assets/arrow-down-bold.svg';

const Post = () => {
  return (
    <div className='post-container'>
      <div className='upvote-section'>
        <img src={Upvote} alt="vote-icon" />
        <span>123</span>
        <img src={Downvote} alt="vote-icon" />
      </div>

      <div className='content-section'>
        <div className='post-headers'>
        </div>

        <div className='post-content'>
        </div>

        <div className='post-actions'>
        </div>
      </div>
    </div>
  )
}

export default Post