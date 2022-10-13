import { createContext } from "react";
import { useState } from "react";
import { existingComments } from "../utils/placeholder/comments";

export const CommentsContext = createContext(existingComments);

export const CommentsProvider = ({children}) => {
    const [comments, setComments] = useState(existingComments);
    const value = { comments, setComments };
    return <CommentsContext.Provider value={value}>{children}</CommentsContext.Provider>
} 