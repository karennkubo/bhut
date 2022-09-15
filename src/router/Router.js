import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './../screens/Home/Home';
import Post from './../screens/Post/Post';
import Update from './../screens/Update/Update';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="post" element={<Post />} />
                <Route path=":id" element={<Update/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;