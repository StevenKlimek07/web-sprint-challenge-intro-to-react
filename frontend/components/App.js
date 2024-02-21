

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'


function App() {
    const [characters, setCharacters] = useState([]);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch people data
                const peopleResponse = await axios.get(urlPeople);
                const peopleData = peopleResponse.data;

                // Fetch planets data
                const planetsResponse = await axios.get(urlPlanets);
                const planetsData = planetsResponse.data;

                // Combine people and planets data
                const combinedData = combineData(peopleData, planetsData);

                // Set combined data and update loading state
                setCharacters(combinedData);
                setLoadingData(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoadingData(false);
            }
        };

        fetchData();
    }, []);

    const combineData = (peopleData, planetsData) => {
        // Your logic to combine people and planets data
        // For example:
        const combinedData = peopleData.map(person => {
            const homeworld = planetsData.find(planet => planet.id === person.homeworld);
            return {
                ...person,
                homeworld: homeworld ? homeworld.name : 'Unknown' // Set homeworld name or 'Unknown' if not found
            };
        });
        return combinedData;
    };

    return (
        <div>
            <h2>Star Wars Characters</h2>
            <p>See the README of the project for instructions on completing this challenge</p>
            {/* Map over the characters array and render each character */}
            {characters.map((character, idx) => (
                <Character key={idx} character={character} />
            ))}
        </div>
    );
}

export default App;


// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
