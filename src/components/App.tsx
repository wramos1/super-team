import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import RouterURLs from './RouterURLs';
import '../styles/App.css'
import Navbar from './Navbar';
import { TabContext } from '../models/TabContext';


const App = () => {
    const [tab, setTab] = useState<string>("Home");

    return (
        <BrowserRouter>
            <TabContext.Provider value={{ tab, setTab }}>
                <Navbar />
                <RouterURLs />
            </TabContext.Provider>
        </BrowserRouter>
    )
}

export default App