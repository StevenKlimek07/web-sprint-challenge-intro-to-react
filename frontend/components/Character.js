import React, { useState } from 'react';

function Character({ character }) {
    const [showHomeworld, setShowHomeworld] = useState(false);

    const toggleHomeworld = () => {
        setShowHomeworld(!showHomeworld);
    };

    return (
        <div className='character-card'>
            <h3 className='character-name'>{character.name}</h3>
            <p onClick={toggleHomeworld}>Planet: {showHomeworld && <span className="character-planet">{character.homeworld}</span>}</p>
        </div>
    );
}

export default Character;
