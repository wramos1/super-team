import React from 'react';
import SuperPerson from '../models/superPerson';
import SuperCard from './SuperCard';

interface SuperTeamProps {
    team: SuperPerson[]
}

const TheSuperTeam = ({ team }: SuperTeamProps): JSX.Element => {

    const mapTeam = team.map(person => {
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

    const renderTeam = (): JSX.Element | undefined => {
        if (team) {
            return <div>{mapTeam}</div>
        }
        else if (team === undefined) {
            return <h1>Loading</h1>
        }
    }

    return (
        <div>
            {renderTeam()}
        </div>
    )
}

export default TheSuperTeam