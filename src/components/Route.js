/**
 * @file Routing function component.
 */

import React from 'react';

const Route = ({ path, children }) => {
    return window.location.pathname === path ? children : null;
};

export default Route;
