/**
 * @file Converter to Google translate API component.
 */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// POST https://translation.googleapis.com/language/translate/v2
// eslint-disable-next-line react/prop-types
const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');

    useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: text,
                        // eslint-disable-next-line react/prop-types
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                    },
                },
            );
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
        // console.log('Convert useEffect new language or text');
    }, [language, text]);

    return (
        <div>
            <h1 className={'ui header'}>{translated}</h1>
        </div>
    );
};

export default Convert;
