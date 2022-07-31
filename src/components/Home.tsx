import React from 'react'
import { useState, useEffect } from 'react';
import supe from '../apis/supe'
import SuperPerson from '../models/superPerson';
import TheSuperTeam from './TheSuperTeam';

const Home = () => {
    //UseState to contain data pertaining to My Team
    const [team, setTeam] = useState<SuperPerson[]>([]);

    //UseEffect renders the data from API calls on initial render
    useEffect(() => {
        fetchSuperTeam();
    }, [])

    //API calls with different Params
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

    //Array of API calls to simplify async function below
    const superAPIList = [getSpidey, getDeadpool, getFlash, getScarletWitch, getSilverSurfer];


    //Function to combine data from all API calls and store them in UseState team
    const fetchSuperTeam = async (): Promise<void> => {
        const res = await Promise.all(superAPIList.map(async (item) => {
            return (await item).data
        }));

        setTeam(res);
    };

    return (
        <div>
            <TheSuperTeam team={team} />
        </div>
    )
}

export default Home