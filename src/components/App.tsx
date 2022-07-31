import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import RouterURLs from './RouterURLs';
import '../styles/App.css'

const App = () => {
    return (
        <BrowserRouter>
            <RouterURLs />
        </BrowserRouter>
    )
}

export default App