import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import RouterURLs from './RouterURLs';
import '../styles/App.css'
import Navbar from './Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <RouterURLs />
        </BrowserRouter>
    )
}

export default App