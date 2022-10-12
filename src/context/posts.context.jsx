import { createContext } from "react";
import { useState } from "react";
import { existingPosts } from "../utils/placeholder/posts";

export const PostsContext = createContext(existingPosts);

export const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState(existingPosts);
    const value = { posts, setPosts };
    
    return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
} 