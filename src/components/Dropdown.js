/**
 * @file Dropdown component.
 */

import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);

    // eslint-disable-next-line lodash/prefer-lodash-method,react/prop-types
    const renderedOptions = options.map((option, idx) => {
        // eslint-disable-next-line react/prop-types
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div
                key={option.value}
                className={'item'}
                onClick={() => onSelectedChange(option)}
                onKeyPress={() => onSelectedChange(option)}
                role={'menuitem'}
                tabIndex={idx + 1}
            >
                {option.label}
            </div>
        );
    });
    return (
        <div className={'ui form'}>
            <div className={'field'}>
                <label className={'label'} htmlFor={'dropdown-color'}>
                    Select a Color
                </label>
                <div
                    onClick={() => setOpen(!open)}
                    onKeyPress={() => setOpen(!open)}
                    role={'button'}
                    tabIndex={0}
                    className={`ui selection dropdown ${
                        open === true ? 'visible active' : ''
                    }`}
                    name={'dropdown-color'}
                >
                    <i className={'dropdown icon'}></i>
                    {/* eslint-disable-next-line react/prop-types */}
                    <div className={'text'}>{selected.label}</div>
                    <div
                        className={`menu ${
                            open === true ? 'visible transition' : ''
                        }`}
                    >
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
