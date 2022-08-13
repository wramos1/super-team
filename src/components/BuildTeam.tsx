import React, { useRef, useState } from 'react'
import supe from '../apis/supe';
import Person from '../models/person';
import SuperPerson from '../models/superPerson';
import Team from './Team';
import { v4 as getId } from 'uuid';
import { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import '../styles/BuildTeam.css'

interface PersonErrorIndex {
    dex: number;
}

const BuildTeam = () => {
    const [persons, setPersons] = useState<Person[]>([]);
    const [team, setTeam] = useState<SuperPerson[]>([]);
    const [callErrors, setCallErrors] = useState<PersonErrorIndex[]>([]);
    const [teamVisible, setTeamVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false)

    const personInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isMounted) {
            if (callErrors.length > 0) {
                setTeamVisible(false);
                for (const index in callErrors) {
                    alert(`${persons[callErrors[index].dex].name} could not be found you duh dur dur`)
                }
            } else {
                setTeamVisible(true);
                scrollToTeamDelay();
            }
        }
    }, [team, callErrors])


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (persons.length === 5) {
            persons.shift();
        }
        setPersons([...persons, {
            id: getId(),
            name: personInputRef.current!.value
        }]);

        personInputRef.current!.value = '';
    }

    const deletePerson = (id: string) => {
        setPersons(persons.filter((item: Person) => item.id !== id))
    }

    const renderPeople = persons.map(({ id, name }) => {
        return (
            <li key={id} className='inputted-person-name'>
                {name}

                <button
                    onClick={() => deletePerson(id)}
                >
                    Delete
                </button>
            </li>
        )
    });

    const getUsersTeam = () => {
        let requests = [];
        for (let i = 0; i < persons.length; i++) {
            requests.push(supe.get('', {
                params: {
                    hero: persons[i].name
                }
            }))
        }
        return requests;
    };

    const callUserInputs = async (requests: Promise<AxiosResponse<any, any>>[]) => {
        const res = await Promise.all(requests.map(async (item, i) => {
            if (typeof (await item).data === 'string') {
                return i;
            } else {
                return (await item).data
            }
        }));

        return res;
    }

    const scrollToTeamDelay = (): void => {
        setTimeout(() => {
            document.querySelector("#teamLevel")!.scrollIntoView({ behavior: 'smooth' });
        }, 150)
    };

    const renderTeamCall = async () => {
        const errorIndexFiller: PersonErrorIndex[] = [];
        const teamFiller: SuperPerson[] = [];

        if (persons.length === 5) {
            const res = await callUserInputs(getUsersTeam());
            for (let i = 0; i < res.length; i++) {
                if (typeof res[i] === 'number') {
                    errorIndexFiller.push({ dex: res[i] })
                }
                else {
                    teamFiller.push(res[i])
                }
            }
            setIsMounted(true)
            setCallErrors(errorIndexFiller);
            setTeam(teamFiller);
        }
        else {
            alert('Must have a team of 5')
        };
    }

    return (
        <div>
            <div id='formContainer'>
                <form onSubmit={handleSubmit} id='buildTeamForm'>
                    <input type="text" id='supeInput' ref={personInputRef} required autoComplete="off" />
                    <label htmlFor='supeInput'>Supername</label>

                    <button>
                        Add
                    </button>
                </form>
            </div>


            <div id='userTeamInputList'>
                {renderPeople}
            </div>

            <button onClick={renderTeamCall}>
                RenderTeam
            </button>

            {teamVisible && (<Team team={team} />)}

        </div>
    )
}

export default BuildTeam