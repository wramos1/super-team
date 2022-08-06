import React from 'react';
import SuperPerson from '../models/superPerson';
import SuperCard from './SuperCard';
import '../styles/CardContainer.css'

interface SuperTeamProps {
    team: SuperPerson[]
}

const Team = ({ team }: SuperTeamProps): JSX.Element => {

    const mapTeam = team.map((person: SuperPerson) => {
        return (
            <SuperCard
                key={person.id}
                name={person.name}
                fullName={person.biography.fullName}
                alignment={person.biography.alignment}
                height={person.appearance.height}
                weight={person.appearance.weight}
                lg={person.images.lg}
                powerstats={person.powerstats}
            />
        )
    });

    let totalPower = team.reduce((accum: number, person: SuperPerson): number => {
        return accum + Object.values(person.powerstats).reduce((a, b) => a + b);
    }, 0)

    const renderTeam = (): JSX.Element | null => {

        if (null) {
            return <div>wasssssup</div>
        }
        else if (team.length === 0) {
            return <div className='spinner'></div>
        }
        return (
            <div id='cardContainer'>
                {mapTeam}
            </div>
        )
    }

    return (
        <div>
            <h1 id='teamLevel'>
                Team Power: <span>{totalPower}</span>
            </h1>
            {renderTeam()}
        </div>
    )
}

export default Team