import './create-post.styles.scss';
import ProfileIcon from '../profile-icon/profile-icon.components';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/submit');
  }

  
  return (
    <div className='create-post-container'>
        <div className='cp-left-section'>
            <ProfileIcon />
        </div>

        <div className='cp-right-section'>
            <input onClick={clickHandler} type="text" placeholder='Post' />
        </div>
    </div>
  )
}

export default CreatePost