import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Routes>
        <Route element={<PostListPage />} path="/" exact />
        <Route element={<PostListPage />} path="/@:username" exact />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/@:username/:postId" element={<PostPage />} />
      </Routes>
    </>
  )
}

export default App