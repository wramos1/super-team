import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import supers from '../supers.png';

const Home = () => {

    useEffect(() => {
        tabSelecting();
    }, [])


    const tabSelecting = () => {
        const tabs = document.getElementsByClassName('home-nav-link');
        const navTabs = document.getElementsByClassName('nav-link');

        for (let i = 0; i < tabs.length; i++) {

            tabs[i].addEventListener('click', () => {
                const previousSelects = document.getElementsByClassName('active');
                if (previousSelects.length > 0) {
                    previousSelects[0].className = previousSelects[0].className.replace('active', '');
                }
                if (i === 0) {
                    navTabs[2].classList.add('active');
                }
                else if (i === 1) {
                    navTabs[3].classList.add('active');
                }
                else if (i === 2) {
                    navTabs[1].classList.add('active');
                }
            })
        };
    };

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
                <Link to={'/randomize-team'} className="home-nav-link" >
                    Randomize a Super-Team
                </Link>

                <Link to={'/build-team'} className="home-nav-link">
                    Build your own Super-Team
                </Link>

                <Link to={'/the-super-team'} className="home-nav-link">
                    View my (THE) Super-Team
                </Link>
            </div>

            <h6>Does your super-team beat mine?</h6>
        </div>
    )
}

export default Home