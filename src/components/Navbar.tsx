import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {

    useEffect(() => {
        tabSelecting();
    }, [])

    const tabSelecting = () => {
        const tabs = document.getElementsByClassName('nav-link');
        tabs[0].classList.add('active');

        for (let i = 0; i < tabs.length; i++) {

            tabs[i].addEventListener('click', () => {
                const previousSelects = document.getElementsByClassName('active');

                if (previousSelects.length > 0) {
                    previousSelects[0].className = previousSelects[0].className.replace('active', '');
                }

                tabs[i].classList.add('active');

            })
        };
    };


    return (
        <div id='navbar'>

            <Link to={process.env.PUBLIC_URL!} className='nav-link'>
                Home
            </Link>

            <Link to={'/the-super-team'} className='nav-link'>
                THE Super Team
            </Link>

            <Link to={'/randomize-team'} className='nav-link'>
                Randomize Team
            </Link>

            <Link to={'/build-team'} className='nav-link'>
                Build Your Own Team
            </Link>

        </div>
    )
}

export default Navbar