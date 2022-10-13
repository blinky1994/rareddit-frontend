export const handleUpvote = (event, postDetails) => {
    const {
      postID, currentNoOfLikes,
      user, setUser,
      posts, setPosts,
      setUpvoteEvent,
      downvoteEvent,
      lastVoteAction, setLastVoteAction
    } = postDetails;

    setUpvoteEvent(event);
    if (checkIfUserHasLiked(postID, user)) {
      if (lastVoteAction === 'downvote'){
        setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes + 1));
        event.target.className = 'activated';
        downvoteEvent.target.className='deactivated';
      } else {
        setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes));
        event.target.className = 'deactivated';
        unregisterLike(postID, user, setUser);
      }
      updateUser(postID, 'upvote', user, setUser);
      setLastVoteAction('upvote');
      return;
    };
    setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes + 1));
    updateUser(postID, 'upvote', user, setUser);
    setLastVoteAction('upvote');
    event.target.className = 'activated';
  }

  export const handleDownvote = (event, postDetails) => {
    const {
      postID, currentNoOfLikes,
      user, setUser,
      posts, setPosts,
      upvoteEvent,
      setDownvoteEvent,
      lastVoteAction, setLastVoteAction
    } = postDetails;

    setDownvoteEvent(event);
    if (checkIfUserHasLiked(postID, user)) {
      if (lastVoteAction === 'upvote'){
        setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes - 1));
        event.target.className = 'activated';
        upvoteEvent.target.className='deactivated';
      } else {
        setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes));
        event.target.className = 'deactivated';
        unregisterLike(postID,user,setUser)
      }
      updateUser(postID, 'downvote', user, setUser);
      setLastVoteAction('downvote');
      return;
    };
    setPosts(UpdatePostLikes(posts, postID, currentNoOfLikes - 1));
    event.target.className = 'activated';
    updateUser(postID, 'downvote', user, setUser);
    setLastVoteAction('downvote');
  }

  const updateUser = (postID, voteType, user, setUser) => {
    if (user.likedPosts.includes(postID)){
      return;
    }
    setUser({...user, 
      likedPosts: [...user.likedPosts, postID],
      likedPostsType: [...user.likedPostsType, voteType + postID]
     });
  }

  const checkIfUserHasLiked = (postID, user) => {
    return user.likedPosts.includes(postID) ? true: false;
  }

  const unregisterLike = (postID, user, setUser) => {
    user.likedPosts.forEach((oldPostID, index) => {
      if (oldPostID === postID)
      {
        setUser(
          {...user, 
            likedPosts: 
            user.likedPosts.filter(oldPostID => oldPostID !== postID),

            likedPostsType: 
            user.likedPostsType.filter
            (oldVoteID => oldVoteID !== user.likedPostsType[index]),
          })
      }
    })
  }

const UpdatePostLikes = (posts, modifyPostID, noOfLikes) => {
    console.log(noOfLikes);
    const updatedPosts = posts.map(post => {
        if (post.postID === modifyPostID){
            const newObj = 
            Object.assign({}, {...post, noOfLikes: noOfLikes});
            return newObj;
        }
        return post;
    })
    return updatedPosts;
}

export const GetPostContent = (posts, postID) => {
    const post =  posts.filter(post => post.postID === postID);
    return post[0];
}