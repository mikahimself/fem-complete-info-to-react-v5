import React, { useState } from 'react';

const SearchParams = () => {
    // React keeps track of the order you create hooks. Therefore, you must
    // never create hooks inside if statements or for loops. If the order of
    // the hooks changes, the contents of the hooks will get messed up.
    const [location, setLocation] = useState("Seattle, WA");
    
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
                <button>Submit</button>
            </form>
        </div>
    )
};

export default SearchParams;