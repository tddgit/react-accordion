/**
 * @file Searching component for Wikipedia.
 */
import React, { useState, useEffect } from 'react';

const Search = () => {
    const [term, setTerm] = useState('');
    console.log('I RUN WITH EVERY RENDER');
    useEffect(() => {
        console.log('I RUN ON EVERY RERENDER AND INITIAL RENDER');
    }, [term]);
    return (
        <div>
            <div className="ui form"></div>
            <div className="field">
                <label htmlFor="search-term">Enter Search Term</label>
                <input
                    name="search-term"
                    type="text"
                    className="input"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Search;
