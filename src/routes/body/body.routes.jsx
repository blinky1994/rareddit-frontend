import './body.styles.scss'
import CreatePost from '../../components/create-post/create-post.components';
import CategoriesBar from '../../components/categories-bar/categories-bar.components';
import Post from '../../components/post/post.components';
import { placeholderData } from '../../utils/placeholder/data'

const RouteBody = () => {
  return (
    <div>
        <CreatePost />
        <CategoriesBar />

        <Post 
        title={placeholderData.title}
        user={placeholderData.user}
        time={placeholderData.timee}
        postContent={placeholderData.postContent}/>
        <Post 
        title={placeholderData.title}
        user={placeholderData.user}
        time={placeholderData.timee}
        postContent={placeholderData.postContent}/>
        <Post 
        title={placeholderData.title}
        user={placeholderData.user}
        time={placeholderData.timee}
        postContent={placeholderData.postContent}/>
    </div>
  )
}

export default RouteBody;