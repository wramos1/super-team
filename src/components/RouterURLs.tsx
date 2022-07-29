import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

const RouterURLs = () => {
    return (
        <Routes>
            <Route path={process.env.PUBLIC_URL} element={<Home />} />
        </Routes>
    )
}

export default RouterURLs