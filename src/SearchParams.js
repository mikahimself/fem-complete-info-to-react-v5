import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';

const SearchParams = () => {
    // React keeps track of the order you create hooks. Therefore, you must
    // never create hooks inside if statements or for loops. If the order of
    // the hooks changes, the contents of the hooks will get messed up.
    const [location, setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);

    async function requestPets() {
        const animals = await pet.animals({
            location,
            breed,
            type: animal
        })

        setPets(animals || []);
    }

    // The useEffect hook takes the place of several lifecycle hooks, such as componentDidMount
    // componentWillUnmount and componentDidUpdate.
    // useEffect is disconnected from rendering; here, we schedule the function to happen
    // after the render happens. What happens here is that the SearchParams is rendered for the first time, and
    // after that the effect gets run.
    useEffect(() => {
        setBreeds([]);
        setBreed("");
        // Both breeds and name are destructured here.
        pet.breeds(animal).then(( apiBreeds ) => {
            const breedStrings = apiBreeds.breeds.map(({ name }) => name);
            setBreeds(breedStrings);
        }, console.error);
        // When using an effect, always define the effect's dependency array. 
        // If setBreed and setBreeds were to be removed from here, this would cause
        // an infinite loop that would try and get updates from the API constantly.
    }, [animal, setBreed, setBreeds])
    
    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location"
                        value={location}
                        placeholder="location"
                        onChange={e => setLocation(e.target.value)}/>
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <button>Submit</button>
            </form>

            <Results pets={pets}></Results>
        </div>
    )
};

export default SearchParams;