/**
 * @file Accordion component for the App.
 */

import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (idx) => {
        setActiveIndex(idx);
    };
    // eslint-disable-next-line react/prop-types

    // eslint-disable-next-line lodash/prefer-lodash-method,react/prop-types
    const renderedItems = items.map((item, idx) => {
        const active = idx === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div>
                    <div
                        className={`title ${active}`}
                        role={'link'}
                        tabIndex={idx}
                        onKeyDown={() => onTitleClick(idx)}
                        onClick={() => onTitleClick(idx)}
                    >
                        <i className={'dropdown icon'}></i>
                        {item.title}
                    </div>
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return <div className={'ui styled accordion'}>{renderedItems}</div>;
};

export default Accordion;
