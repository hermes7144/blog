import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/PostListPage';

import PostPage from './pages/PostPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<PostListPage />} path="/" exact />
        <Route element={<PostListPage />} path="/@:username" exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/@:username/:postId" element={<PostPage />} />
      </Routes>
    </div >
  )
}

export default App