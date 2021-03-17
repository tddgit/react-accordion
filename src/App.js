/**
 * @file Main App component.
 */

import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front edn JS framework',
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite  JS library between frontend engineers',
    },
    {
        title: 'How to use React?',
        content: 'You use React by creating components',
    },
];

const options = [
    { label: 'The Color Red', value: 'red' },
    { label: 'The Color Green', value: 'green' },
    { label: 'A Shade of Blue', value: 'blue' },
];

const showAccordion = () => {
    if (window.location.pathname === '/') {
        return <Accordion items={items} />;
    }
    return null;
};

// eslint-disable-next-line consistent-return
const showList = () => {
    if (window.location.pathname === '/list') {
        return <Search />;
    }
    // return null;
};

const showDropdown = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState(options[0]);
    if (window.location.pathname === '/dropdown') {
        return (
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
        );
    }
    return null;
};
const showTranslate = () => {
    if (window.location.pathname === '/translate') {
        return <Translate />;
    }
    return null;
};

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Route path={'/'} chi>
                <Accordion items={items} />;
            </Route>
            <Route path={'/list'} chi>
                <Search />
            </Route>
            <Route path={'/dropdown'} chi>
                <Dropdown
                    label={'Select a color'}
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
            </Route>
            <Route path={'/translate'} chi>
                <Search />
            </Route>
        </div>
    );
};
export default App;
