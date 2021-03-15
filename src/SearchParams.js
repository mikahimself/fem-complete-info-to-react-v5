import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
    // React keeps track of the order you create hooks. Therefore, you must
    // never create hooks inside if statements or for loops. If the order of
    // the hooks changes, the contents of the hooks will get messed up.
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("dog");
    
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location"
                        value={location}
                        placeholder="location"
                        onChange={e => setLocation(e.target.value)}/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select id="animal"
                        value={animal}
                        onChange={e => setAnimal(e.target.value)}
                        onBlur={e => setAnimal(e.target.value)}>
                        <option>All</option>
                        {/* Map array of animal name strings into option elements */}
                        {/* Why keys? React will re-render the view on changes like adding or removing items. */}
                        {/* Unique keys help React realize that it's just the order that has changed, saving React */}
                        {/* the trouble of removing options and adding them later on down in the options list */}
                        {ANIMALS.map(animal => (<option key={animal} value={animal}>{animal}</option>))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
};

export default SearchParams;