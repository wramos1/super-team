import React from 'react'
import { BrowserRouter, Route, Router } from 'react-router-dom';
import RouterURLs from './RouterURLs';

const App = () => {
    return (
        <BrowserRouter>
            <RouterURLs />
        </BrowserRouter>
    )
}

export default App