import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {

    const [tab, setTab] = useState<string>('Home');

    useEffect(() => {
        tabSelecting();
    }, [])

    const tabSelecting = () => {
        const tabs = document.getElementsByClassName('nav-link');
        tabs[0].classList.add('active');

        for (let i = 0; i < tabs.length; i++) {

            tabs[i].addEventListener('click', () => {
                const previousSelects = document.getElementsByClassName('active');
                document.querySelector('.hamburger')!.classList.remove('appear');
                document.querySelector('.nav-menu')!.classList.toggle('appear');


                if (previousSelects.length > 0) {
                    previousSelects[0].className = previousSelects[0].className.replace('active', '');
                }

                tabs[i].classList.add('active');
                setTab(tabs[i].innerHTML)

            })
        };
    };

    const hamburgerAppear = () => {
        document.querySelector('.hamburger')!.classList.toggle('appear');
        document.querySelector('.nav-menu')!.classList.toggle('appear');
    }

    return (
        <div id='navbar'>

            <div className='current-tab'>
                {tab}
            </div>


            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to={process.env.PUBLIC_URL!} className='nav-link'>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/the-super-team'} className='nav-link'>THE Super Team</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/randomize-team'} className='nav-link'>
                        Randomize Team
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/build-team'} className='nav-link'>
                        Build Your Own Team
                    </Link>
                </li>
            </ul>

            <div className="hamburger" onClick={hamburgerAppear}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

        </div>
    )
}

export default Navbar