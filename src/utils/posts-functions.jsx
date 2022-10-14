export const initializePostLikesCheck = (postDetails) => {
  const {postID, user, postLikes, setPostLikes} = postDetails;
  
  if (checkIfUserHasLiked(postID, user) === 'upvote') {
    setPostLikes(postLikes - 1);
  }
  else if (checkIfUserHasLiked(postID, user) === 'downvote') {
    setPostLikes(postLikes + 1);
  }
}

export const getUpVoteButtonClassName = (postID, user) => {
  let className = '';
  user.likedPosts.forEach((likedPost, index) => {
    if (likedPost.includes(postID)){
      if (likedPost[1] === 'upvote'){
        className = 'activated';
      }
      if (likedPost[1] === 'downvote'){
        className = 'deactivated';
      }
    }
  });
  return className;
}

export const getDownVoteButtonClassName = (postID, user) => {
  let className = '';
  user.likedPosts.forEach((likedPost, index) => {
    if (likedPost.includes(postID)){
      if (likedPost[1] === 'upvote'){
        className = 'deactivated';
      }
      if (likedPost[1] === 'downvote'){
        className = 'activated';
      }
    }
  });
  return className;
}

export const handlePostUpvote = (postDetails) => {
    const {
      postID, postLikes,
      user, setUser,
      posts, setPosts,
    } = postDetails;
    if (checkIfUserHasLiked(postID, user) === 'downvote') {
      console.log('a');
      setPosts(UpdatePostLikes(posts, postID, postLikes + 1));
      updateUser(postID, 'upvote', user, setUser);
    }

    else if (checkIfUserHasLiked(postID, user) === 'upvote') {
      console.log('b');
      setPosts(UpdatePostLikes(posts, postID, postLikes));
      unregisterLike(postID, user, setUser);
    }

    else {
      console.log('c');
      setPosts(UpdatePostLikes(posts, postID, postLikes + 1));
      updateUser(postID, 'upvote', user, setUser);
    }
  }

  export const handlePostDownvote = (postDetails) => {
    const {
      postID, postLikes,
      user, setUser,
      posts, setPosts,
    } = postDetails;

    if (checkIfUserHasLiked(postID, user) === 'upvote') {
      console.log('d');      
      setPosts(UpdatePostLikes(posts, postID, postLikes - 1));
      updateUser(postID, 'downvote', user, setUser);
    }

    else if (checkIfUserHasLiked(postID, user) === 'downvote') {
      console.log('e');
      setPosts(UpdatePostLikes(posts, postID, postLikes));
      unregisterLike(postID,user,setUser)
    }

    else {
      console.log('f');
      setPosts(UpdatePostLikes(posts, postID, postLikes - 1));
      updateUser(postID, 'downvote', user, setUser);
    }
  }

  const updateUser = (postID, voteType, user, setUser) => {
    let checkPostExist = false;
    
    const newLikedPosts = user.likedPosts.map((likedPost, index) => {
      if (likedPost.includes(postID)){
        checkPostExist = true;
        return Object.assign([], [postID, voteType]);
      }
      return likedPost;
    });

    setUser({...user, likedPosts: newLikedPosts});
    if (checkPostExist) return;

    setUser({...user, 
      likedPosts: [...user.likedPosts, [postID, voteType]]
     });
  }

  const checkIfUserHasLiked = (postID, user) => {
    let voteType = null;
     user.likedPosts.forEach(likedPost => {
      if (likedPost.includes(postID)){
        voteType = likedPost[1];
      }
    });
    return voteType;
  }

  const unregisterLike = (postID, user, setUser) => {
    user.likedPosts.forEach((likedPost, index) => {
      if (likedPost[0] === postID) {
        setUser(
          {...user, 
            likedPosts: 
            user.likedPosts.filter(likedPost => likedPost[0] !== postID),
          })
      }
    })
  }

const UpdatePostLikes = (posts, modifyPostID, noOfLikes) => {
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