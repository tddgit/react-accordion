/**
 * @file Translation component.
 */

import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
    {
        label: 'Africanas',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },
];

// POST https://translation.googleapis.com/language/translate/v2

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');
    return (
        <div>
            <div className={'ui form'}>
                <div className={'field'}></div>
                <label htmlFor="text-field">
                    Enter the phrase to translation
                </label>
                <input
                    name={'text-field'}
                    value={text}
                    type="text"
                    onChange={(event) => setText(event.target.value)}
                />
            </div>

            <Dropdown
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                label={'Select a language'}
            />
        </div>
    );
};

export default Translate;
