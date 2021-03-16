/**
 * @file Searching component for Wikipedia.
 */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState('programming');
    const [results, setResults] = useState([]);

    useEffect(() => {
        console.log('Before setting timeout');
        const timerId = setTimeout(() => {
            console.log('Timeout setDebouncedTerm');
            setDebouncedTerm(term);
        }, 1000);
        return () => {
            console.log('Clear timeout');
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                `https://en.wikipedia.org/w/api.php`,
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        origin: '*',
                        format: 'json',
                        srsearch: debouncedTerm,
                    },
                },
            );
            console.log('setResults');
            setResults(data.query.search);
        };
        search();
    }, [debouncedTerm]);

    // eslint-disable-next-line consistent-return
    // useEffect(() => {
    //     const search = async () => {
    //         const { data } = await axios.get(
    //             `https://en.wikipedia.org/w/api.php`,
    //             {
    //                 params: {
    //                     action: 'query',
    //                     list: 'search',
    //                     origin: '*',
    //                     format: 'json',
    //                     srsearch: term,
    //                 },
    //             },
    //         );
    //
    //         setResults(data.query.search);
    //     };
    //
    //     if (term && !results.length) {
    //         search();
    //     } else {
    //         const timeoutId = setTimeout(() => {
    //             if (term) {
    //                 search();
    //             }
    //         }, 1000);
    //
    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     }
    // }, [term, results.length]);

    // eslint-disable-next-line lodash/prefer-lodash-method
    const renderedResults = results.map((result) => {
        return (
            <div className={'item'} key={result.pageid}>
                <div className="right floated content"></div>
                <a
                    href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    className={'ui button'}
                >
                    Go
                </a>
                <div className={'content'}>
                    <div className={'header'}>{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        );
    });

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
            <div className={'ui celled list'}>{renderedResults}</div>
        </div>
    );
};

export default Search;
