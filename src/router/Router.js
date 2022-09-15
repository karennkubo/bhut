import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './../screens/Home/Home';
import Post from './../screens/Post/Post';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="post" element={<Post />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;