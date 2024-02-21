import React, { useState } from 'react';

function Character({ character }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div onClick={toggleHomeworld} className='character-card'>
      <h3 className='character-name'>{character.name}</h3>
      {showHomeworld && (
        <p>Planet:
          <span className="character-planet">{character.homeworld}</span>
        </p>
        )}
    </div>
  );
}

export default Character;
