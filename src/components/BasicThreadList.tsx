import '../App.css';

import React from 'react';
import { Link } from 'react-router-dom';

const BasicThreadList: React.FC = () => {
    return (
        <div style={{ width: '25vw', margin: 'auto', textAlign: 'center' }}>
            <h1>{'Sample text 1'}</h1>
            <h4>{'Welcome to my forum!'}</h4>
            {/* why is the ol, ordered list, not working? Anger */}
            <ol type = 'A'>
                <li>
                    {/* Where this leads to is dictated by src/App.tsx */}
                    <Link to="/thread/1">{'Inspirational Quotes'}</Link>
                    {' by Aiken'}
                </li>
                <li>
                    <Link to="/deadEnd">{'Surprise?'}</Link>
                </li>
            </ol>
        </div>
    );
};

export default BasicThreadList;
