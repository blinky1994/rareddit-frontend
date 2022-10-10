import './create-post.styles.scss';
import ProfileIcon from '../profile-icon/profile-icon.components';

const CreatePost = () => {
  return (
    <div className='create-post-container'>
        <div className='cp-left-section'>
            <ProfileIcon />
        </div>

        <div className='cp-right-section'>
            <input type="text" placeholder='Post' />
        <button>Post</button>
        </div>
    </div>
  )
}

export default CreatePost