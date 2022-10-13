export const UpdatePostLikes = (posts, modifyPostID, noOfLikes) => {
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