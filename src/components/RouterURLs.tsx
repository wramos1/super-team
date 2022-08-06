import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import TheSuperTeam from './TheSuperTeam';
import Randomize from './Randomize';

const RouterURLs = () => {
    return (
        <Routes>
            <Route path={process.env.PUBLIC_URL} element={<Home />} />
            <Route path={'/the-super-team'} element={<TheSuperTeam />} />
            <Route path={'/randomize-team'} element={<Randomize />} />
        </Routes>
    )
}

export default RouterURLs