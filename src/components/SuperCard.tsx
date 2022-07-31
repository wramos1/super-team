import React from 'react'

interface SuperCardProps {
    name: string;
    fullName: string;
    alignment: string;
    height: string[];
    weight: string[];
    lg: string;
}

const SuperCard = ({ name, fullName, alignment, height, weight, lg }: SuperCardProps) => {
    return (
        <div>
            <img src={lg} />
            <h1>{name}</h1> <span>{alignment}</span>
            <p>{weight.join('/')}</p>
        </div>
    )
}

export default SuperCard