import './post-page.styles.scss';
import { useContext } from 'react';
import { PostsContext } from '../../context/posts.context';
import { useParams } from 'react-router-dom';
import { GetPostContent } from '../../utils/posts-functions';
import Post from '../../components/post/post.components';
import moment from 'moment/moment';
import Comments from '../../components/comments/comments.components';
const PostPage = () => {
    const { postIDroute } = useParams();
    const { posts } = useContext(PostsContext);

    const currentPost = GetPostContent(posts, postIDroute);
    const { postID, title, userName, dateTime, content, noOfLikes } = currentPost;

    return (
    <>
      {
        currentPost && 
        <>
        <Post 
            postID={postID}
            title={title}
            userName={userName}
            dateTime={moment(dateTime, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
            content={content}
            noOfLikes={noOfLikes}
          />
          <Comments postID={postID}/>
          </>
      }

    </>
    )
}

export default PostPage