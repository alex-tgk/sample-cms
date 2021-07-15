import React from 'react';

/**
 *
 * @param {string} header
 * @param {string} copy
 * @returns {JSX.Element}
 * @constructor
 */
function Header({header, copy}) {
    return (
        <div className={'container'}>
            <h1>
                {header}
            </h1>
            <p>
                {copy}
            </p>
        </div>
    );
};

export default Header;