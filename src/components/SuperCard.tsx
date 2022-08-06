import React from 'react';
import '../styles/Card.css'

interface SuperCardProps {
    name: string;
    fullName: string;
    alignment: string;
    height: string[];
    weight: string[];
    lg: string;
    powerstats: Power;
}

interface Power {
    combat: number;
    durability: number;
    intelligence: number;
    power: number;
    speed: number;
    strength: number;
}

const SuperCard = ({ name, fullName, alignment, height, weight, lg, powerstats }: SuperCardProps) => {

    const powerLevel = (obj: Power): number => {
        return Object.values(obj).reduce((a, b) => a + b);
    };

    const loopPower = (obj: Power): JSX.Element[] => {
        return Object.keys(obj).map((stat: string, i: number) => {
            return (
                <li key={i}>
                    {stat.charAt(0).toUpperCase() + stat.slice(1)} - <span>{obj[stat as keyof Power]}</span>
                </li>
            )
        });
    };

    const checkHeroStatus = (status: string): string => {
        if (status === 'good') {
            return 'Hero';
        }
        else if (status === 'neutral') {
            return 'Neutral';
        }
        else return 'Villain';
    }

    return (
        <div className='flip-card'>
            <div className='flip-card-inner'>

                <div className='flip-card-front'>  {/* Front of Card */}
                    <h2>Power Level:  <span>{powerLevel(powerstats)}</span></h2>
                    <img src={lg} alt={name} />
                    <h1>
                        {name}
                    </h1>
                </div>

                <div className='flip-card-back'> {/* Back of Card */}

                    <div className='profile'>
                        <img src={lg} alt={`small ${name}`} />
                        <h2>{name}</h2>
                        <span>{fullName}</span>
                    </div>

                    <div className='hero-details'>
                        <h4>Status: <span>{checkHeroStatus(alignment)}</span></h4>
                        <h4>Weight: <span>{weight.join(' / ')}</span></h4>
                        <h4>Height: <span>{height.join(' / ')}</span></h4>
                    </div>

                    <ul className='hero-grid-stats'>
                        {loopPower(powerstats)}
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default SuperCard