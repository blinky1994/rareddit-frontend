export const UpvotePost = (posts, modifyPostID) => {
    console.log('Upvote');
    const updatedPosts = posts.map(post => {
        if (post.postID === modifyPostID){
            const newObj = 
            Object.assign({}, {...post, noOfLikes: post.noOfLikes + 1});
            return newObj;
        }
        return post;
    })
    return updatedPosts;
}

export const DownvotePost = (posts, modifyPostID) => {
    console.log('Downvote');
    const updatedPosts = posts.map(post => {
        if (post.postID === modifyPostID){
            const newObj = 
            Object.assign({}, {...post, noOfLikes: post.noOfLikes - 1});
            return newObj;
        }
        return post;
    })
    return updatedPosts;
}