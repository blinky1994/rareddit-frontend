import './home.styles.scss'
import CreatePost from '../../components/create-post/create-post.components';
import CategoriesBar from '../../components/categories-bar/categories-bar.components';
import Post from '../../components/post/post.components';
import { useContext } from 'react';
import { PostsContext } from '../../context/posts.context';
import moment from 'moment/moment';

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
            postID={post.postID}
            title={post.title}
            userName={post.userName}
            dateTime={moment(post.dateTime, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
            content={post.content}
            noOfLikes={post.noOfLikes}
            navigation={'navigation-allowed'}
            />
          })
        }


    </div>
  )
}

export default Home;