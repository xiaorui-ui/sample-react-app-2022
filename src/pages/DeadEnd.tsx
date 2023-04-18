import React from 'react';

const DeadEnd: React.FC = () => {
    return (
        <div style={{ width: '25vw', margin: 'auto', textAlign: 'center' }}>
            {/* <plaintext>{'text'}</plaintext>, doesn't work beacsue the style is alr specified*/}
            <h6> {"It's a trap!"} </h6>

            <p> {'plaintext'} </p>

            <p> {'more text'} </p>

            <p> {'vwefwe'} </p>
        </div>
    );
};

export default DeadEnd;

// Yay I created my first page!
// Remember to include in the app, import it(else how else would the app know where it is right?) and include its url
// <p> for plaintext