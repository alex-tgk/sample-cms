import React from 'react';

/**
 * Hero Block Component
 * @param {string} header
 * @param {string} copy
 * @param {{source: string,alt: string }} image
 * @returns {JSX.Element}
 * @constructor
 */
function HeroBlock({header, copy, image}) {
    return (
        <div className={'container'}>
            <h2>
                {header}
            </h2>
            <div style={{
                margin: '0 auto',
                width: '550px',
                maxWidth: '100%',
                textAlign: 'center'
            }}>
                <img src={image.source} alt={image.alt}/>
            </div>
            <p>
                {copy}
            </p>
        </div>
    );
};

export default HeroBlock;