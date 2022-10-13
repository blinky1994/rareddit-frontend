import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { PostsProvider } from './context/posts.context';
import { UserProvider } from './context/user.context';
import { CommentsProvider } from './context/comments.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <PostsProvider>
        <CommentsProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </CommentsProvider>
      </PostsProvider>
      </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
