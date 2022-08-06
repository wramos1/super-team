import React from 'react'
import { useState } from 'react'
import SuperPerson from '../models/superPerson';
import supe from '../apis/supe';
import Team from './Team';
import '../styles/Randomize.css'

const Randomize = () => {
    const [type, setType] = useState('');
    const [visible, setVisible] = useState(false)
    const [team, setTeam] = useState<SuperPerson[]>([])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setType(e.currentTarget.value);
    };

    const selectFiveFromAPICall = async () => {
        const res = await supe.get(`/${type}`)
        setTeam(res.data.slice(0, 5));
    }

    const randomizeTeam = async () => {
        const villains = await supe.get('/villains');
        const heroes = await supe.get('/heroes');
        setTeam([...villains.data.slice(0, 2), ...heroes.data.slice(0, 3)])
    }

    const scrollToTeamDelay = (): void => {
        setTimeout(() => {
            document.querySelector("#teamLevel")!.scrollIntoView({ behavior: 'smooth' });
        }, 150)
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (type === '') {
            alert('Please select a type')
        }
        else if (type === 'mixed') {
            randomizeTeam();
            setVisible(true)
            scrollToTeamDelay();
        }
        else {
            selectFiveFromAPICall();
            setVisible(true);
            scrollToTeamDelay();
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit} id='randomizeForm'>
                <div>
                    <input
                        type="radio"
                        value='heroes'
                        name='type'
                        id='heroesBtn'
                        onChange={handleChange}
                    />
                    <label htmlFor="heroesBtn">Heroes</label>
                </div>

                <div>
                    <input
                        type="radio"
                        value='villains'
                        name='type'
                        id='villainsBtn'
                        onChange={handleChange}
                    />
                    <label htmlFor="villainsBtn">Villains</label>
                </div>

                <div>
                    <input
                        type="radio"
                        value='mixed'
                        name='type'
                        id='mixedBtn'
                        onChange={handleChange}
                    />
                    <label htmlFor="mixedBtn">Mixed</label>
                </div>
            </form>

            <button id='randomizer' onClick={handleSubmit}>
                Create Team
            </button>

            <h1 id='typeDisplayer'>
                Team Type: <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
            </h1>

            {visible && (<Team team={team} />)}
            <div className="lastDiv"></div>
        </div>
    )
}

export default Randomize