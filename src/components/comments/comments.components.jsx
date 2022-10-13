import './comments.styles.scss';
import React from 'react'
import { useContext } from 'react';
import { CommentsContext } from '../../context/comments.context';
import Comment from './comment/comment.components';
import moment from 'moment/moment';
// {
//     postID: `post-0`,
//     userName : `rough-waterfall`,
//     dateTime: `September 10th 2022, 3:26:17 pm`,
//     content : `Lmao I also had a similar thing going on and yea you gotta chill out my bruther.`,
//     noOfLikes: 14,
//     hierarchyLevel: 0
//   },

const Comments = ({ postID }) => {
    const { comments } = useContext(CommentsContext);

    return (
    <>
        {
            comments.map((comment, index) => (
                comment.postID === postID &&
                <Comment 
                    key = {index}
                    postID = {comment.postID}
                    userName = {comment.userName}
                    dateTime = {moment(comment.dateTime, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
                    content = {comment.content}
                    noOfLikes = {comment.noOfLikes}
                    hierarchyLevel = {comment.hierarchyLevel}
                />
            ))
        }
    </>
    )
}

export default Comments