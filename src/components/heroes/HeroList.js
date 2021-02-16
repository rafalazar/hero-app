import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';
import './HeroList.css';

const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);
    // const heroes = getHeroesByPublisher(publisher);

    return (
        <div className="hero__list animate__animated animate__fadeIn">
            {
                heroes.map(h => (
                    <HeroCard 
                        key={h.id}
                        {...h}
                    />
                ))
            }
        </div>
    );
}

export default HeroList;
