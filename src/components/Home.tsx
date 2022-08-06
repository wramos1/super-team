import React from 'react';
import '../styles/Home.css';
import supers from '../supers.png';

const Home = () => {
    return (
        <div id='home'>
            <h1>
                Welcome
            </h1>

            <h2>
                To the home of <span>SUPER-TEAMS</span>
            </h2>

            <img src={supers} alt="superheroes" />

            <div id='tabDescriptors'>
                <h4>
                    <span>Randomize</span> a Super-Team
                </h4>

                <h4>
                    <span>Build</span> your own Super-Team
                </h4>

                <h4>
                    <span>View my (THE)</span> Super-Team
                </h4>
            </div>

            <h6>Does your super-team beat mine?</h6>
        </div>
    )
}

export default Home