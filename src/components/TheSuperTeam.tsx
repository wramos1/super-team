import React from 'react';
import SuperPerson from '../models/superPerson';
import SuperCard from './SuperCard';
import '../styles/CardContainer.css'

interface SuperTeamProps {
    team: SuperPerson[]
}

const TheSuperTeam = ({ team }: SuperTeamProps): JSX.Element => {

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

    const renderTeam = (): JSX.Element | undefined => {
        if (team) {
            return <div id='cardContainer'>{mapTeam}</div>
        }
        else if (team === undefined) {
            return <h1>Loading</h1>
        }
    }

    return (
        <div>
            <h1 id='teamLevel'>
                Team Power: {totalPower}
            </h1>

            {renderTeam()}
        </div>
    )
}

export default TheSuperTeam