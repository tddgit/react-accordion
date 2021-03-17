/**
 * @file Dropdown component.
 */

import React, { useState, useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const Dropdown = ({ options, selected, onSelectedChange, label }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            console.log('BODY CLICK!!!');
            console.log('event.target', event.target);
            if (ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener(
            'click',

            onBodyClick,
            { capture: true },
        );
        return () => {
            document.body.removeEventListener('click', onBodyClick, {
                capture: true,
            });
        };
    }, []);

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
                onClick={() => {
                    console.log('ITEMS CLICKED!!!');
                    onSelectedChange(option);
                }}
                onKeyPress={() => onSelectedChange(option)}
                role={'menuitem'}
                tabIndex={idx + 1}
            >
                {option.label}
            </div>
        );
    });

    console.log('ref.current', ref.current);

    return (
        <div ref={ref} className={'ui form'}>
            <div className={'field'}>
                <label className={'label'} htmlFor={'dropdown-color'}>
                    {label}
                </label>
                <div
                    onClick={() => {
                        console.log('DROPDOWN CLICKED!!');
                        setOpen(!open);
                    }}
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
