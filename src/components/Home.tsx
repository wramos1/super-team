import React from 'react'
import { useState } from 'react';
import supe from '../apis/supe'
import SuperPerson from '../models/superPerson';

const Home = () => {
    const [team, setTeam] = useState<SuperPerson[]>([]);


    const getSpidey = supe.get('', {
        params: {
            hero: 'Spiderman'
        }
    });

    const getDeadpool = supe.get('', {
        params: {
            hero: 'Deadpool'
        }
    })

    const getFlash = supe.get('', {
        params: {
            hero: 'Flash'
        }
    })

    const getScarletWitch = supe.get('', {
        params: {
            hero: 'Scarlet Witch'
        }
    })
    const getSilverSurfer = supe.get('', {
        params: {
            hero: 'Silver Surfer'
        }
    })

    const superAPIList = [getSpidey, getDeadpool, getFlash, getScarletWitch, getSilverSurfer]


    const handleClick = async (): Promise<void> => {
        const res = await Promise.all(superAPIList.map(async (item) => {
            return (await item).data
        }));

        setTeam(res);
    };

    function check() {
        console.log(team)
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click
            </button>
            <button onClick={check}>Check</button>
        </div>
    )
}

export default Home