import CommentItem from './CommentItem';
import Comment from '../types/Comment';

import React from 'react';

type Props = {
    styled: boolean;
};

const BasicCommentList: React.FC<Props> = ({ styled }: Props) => {
    const comments: Comment[] = [
        // every comment MUST have body, author, and timestamp, as dictated by src/types/Comment.tsx!
        {
            body:
                'Any fool can write code that a computer can understand.\n' +
                'Good programmers write code that humans can understand.\n' +
                ' ~ Martin Fowler',
            author: 'Benedict',
            // for some reason, only month is 0-indexed!
            timestamp: new Date(2022, 13, 28, 10, 33, 30),
        },
        {
            body: 'Code reuse is the Holy Grail of Software Engineering.\n' + ' ~ Douglas Crockford',
            author: 'Casey',
            timestamp: new Date(2022, 0, 1, 11, 11, 11),
        },
        {
            body: "Nine people can't make a baby in a month.\n" + ' ~ Fred Brooks',
            author: 'Duuet',
            timestamp: new Date(2022, 11, 2, 10, 30, 0),
        },
        {
            body: "This is a test comment",
            author: 'sussy baka',
            // can't set it to null/undefined etc.
            // timestamp: undefined,
            timestamp: new Date(-4, 11, 2, 10, 10, 10),
            // timestamp: new Date(2069, 4, 20, 9, 11, 69),
        }
    ];

    return (
        <ul>
            {comments.map((comment) => (
                // CommentItem is another class in src.components that dictate how a comment is rendered!
                <CommentItem comment={comment} styled={styled} key="" />
            ))}
        </ul>
    );
};

export default BasicCommentList;
