import React from 'react';

const BasicCommentBox: React.FC = () => {
    return (
      <form>
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" name="comment"></textarea>
        <button type="submit">Unsub</button>
      </form>
    );
  };

export default BasicCommentBox;


