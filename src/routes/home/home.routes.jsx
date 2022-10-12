import './home.styles.scss'
import CreatePost from '../../components/create-post/create-post.components';
import CategoriesBar from '../../components/categories-bar/categories-bar.components';
import Post from '../../components/post/post.components';
import { useContext } from 'react';
import { PostsContext } from '../../context/posts.context';

const Home = () => {
  const { posts } = useContext(PostsContext);
  return (
    <div>
        <CreatePost />
        <CategoriesBar />
        {
          posts.map((post, index) => {
            return <Post 
            key={index}
            title={post.title}
            user={post.user}
            time={post.timeFromDate}
            content={post.content}
            noOfLikes={post.noOfLikes}
            />
          })
        }


    </div>
  )
}

export default Home;