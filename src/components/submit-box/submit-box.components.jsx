import './submit-box.styles.scss'
import Button, { BUTTON_TYPE_CLASSES, ICON_TYPE_CLASSES } from '../button/button.component';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { PostsContext } from '../../context/posts.context';
import moment from 'moment/moment';
import { UserContext } from '../../context/user.context';

const defaultSubmitFields = {
  titleText: '',
  bodyText: '',
}

const SubmitBox = () => {
  const navigate = useNavigate();
  const [submitFields, setSubmitFields] = useState(defaultSubmitFields);
  const { titleText, bodyText } = submitFields;
  const { posts, setPosts } = useContext(PostsContext);
  const { user } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSubmitFields({...submitFields, [name]: value })
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      if (titleText.length <= 0 || bodyText.length <= 0) {
        alert('Please complete all fields');
        return;
      }
      addNewPost();
      navigate('/');
  }

  const addNewPost = () => {
    const dateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    const newPost =     {
      postID: `post-${posts.length + 1}`,
      user : user.userName,
      dateTime :  dateTime,
      timeFromDate: `13 hours`,
      title : titleText,
      content : bodyText,
      noOfLikes: 0,
    }
    setPosts(prevPost => [newPost, ...prevPost]);
  }

  return (
    <div className='submit-box-container'>
        <div className='title-section'>
            <input type='text' placeholder='Title' name='titleText' onChange={handleChange} />
        </div>
        <div className='body-section'>
         <textarea cols='40' rows='10' placeholder='qewqe' name="bodyText" onChange={handleChange}></textarea>
        </div>
        <div className='bottom-section'>
          <Button
          type='submit'
          buttonType={BUTTON_TYPE_CLASSES.post}
          iconType={ICON_TYPE_CLASSES.comment}
          onClick={handleSubmit}
          >Post</Button>
        </div>
        {/* Post Button */}

    </div>
  )
}

export default SubmitBox