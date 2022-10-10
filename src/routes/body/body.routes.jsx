import './body.styles.scss'
import CreatePost from '../../components/create-post/create-post.components';
import CategoriesBar from '../../components/categories-bar/categories-bar.components';
import Post from '../../components/post/post.components';

const RouteBody = () => {
  return (
    <div>
        <CreatePost />
        <CategoriesBar />
        <Post />
    </div>
  )
}

export default RouteBody;