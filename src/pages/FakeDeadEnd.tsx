import React from 'react';
import BasicCommentBox from '../components/CommentBox';
import { Link } from 'react-router-dom';

const FakeDeadEnd: React.FC = () => {
    return (
        <div style={{ width: '25vw', margin: 'auto', textAlign: 'center' }}>
            {/* <plaintext>{'text'}</plaintext>, doesn't work beacsue the style is alr specified*/}
            <h4> {"It's a trap!"} </h4>

            <p> {'Just kidding. How do you feel?'} </p>

            <BasicCommentBox/>

            <Link to = '/'>{'Back to home'}</Link>
        </div>
    );
};

export default FakeDeadEnd;

// Yay I created my first page!
// Remember to include in the app, import it(else how else would the app know where it is right?) and include its url
// <p> for plaintext