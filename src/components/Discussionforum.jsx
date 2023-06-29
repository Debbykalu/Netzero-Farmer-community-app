import React, { useState, useEffect } from 'react';

const Discussionforum = () => {
   const [challenges, setChallenges] = useState([]);
  const [challengeText, setChallengeText] = useState('');
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    // Retrieve challenges, comments, and likes from local storage on component mount
    const storedChallenges = localStorage.getItem('challenges');
    const storedComments = localStorage.getItem('comments');
    const storedLikes = localStorage.getItem('likes');

    setChallenges(storedChallenges ? JSON.parse(storedChallenges) : []);
    setComments(storedComments ? JSON.parse(storedComments) : []);
    setLikes(storedLikes ? JSON.parse(storedLikes) : []);
  }, []);

  useEffect(() => {
    // Store challenges, comments, and likes in local storage whenever they change
    localStorage.setItem('challenges', JSON.stringify(challenges));
    localStorage.setItem('comments', JSON.stringify(comments));
    localStorage.setItem('likes', JSON.stringify(likes));
  }, [challenges, comments, likes]);

  const handleChallengeInputChange = (event) => {
    setChallengeText(event.target.value);
  };

  const handleChallengeSubmit = (event) => {
    event.preventDefault();
    if (challengeText.trim() !== '') {
      setChallenges([...challenges, { text: challengeText, comments: [] }]);
      setChallengeText('');
    }
  };

  const handleCommentInputChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = (event, challengeIndex) => {
    event.preventDefault();
    if (commentText.trim() !== '') {
      const updatedChallenges = [...challenges];
      updatedChallenges[challengeIndex].comments.push({ text: commentText, likes: 0 });
      setChallenges(updatedChallenges);
      setCommentText('');
    }
  };

  const handleLikeComment = (challengeIndex, commentIndex) => {
    const updatedChallenges = [...challenges];
    updatedChallenges[challengeIndex].comments[commentIndex].likes += 1;
    setChallenges(updatedChallenges);
  };

    const handleResetChallenge = (challengeIndex) => {
    const updatedChallenges = [...challenges];
    updatedChallenges.splice(challengeIndex, 1);
    setChallenges(updatedChallenges);
  };


  return (
    <div className='discForum'>
      <h2 className='ourChallenges'>Share ideas or ask questions here</h2>
      <form onSubmit={handleChallengeSubmit}>
        <textarea className='textarea' value={challengeText} onChange={handleChallengeInputChange} />
        <button type="submit">Submit Note</button>
      </form>
      <h3 className='ourChallenges'>Submitted Notes</h3>
      <div className="challenge-cards">
        {challenges.length === 0 ? (
          <p className='ourChallenges'>No Notes submitted yet.</p>
        ) : (
          challenges.map((challenge, challengeIndex) => (
            <div key={challengeIndex} className="challenge-card">
              <p>{challenge.text}</p>
              <form onSubmit={(event) => handleCommentSubmit(event, challengeIndex)}>
                <input
                  type="text"
                  value={commentText}
                  onChange={handleCommentInputChange}
                  placeholder="Add a comment..."
                />
                <button type="submit">Submit Comment</button>
              </form>
              <div className="comments">
                {challenge.comments.map((comment, commentIndex) => (
                  <div key={commentIndex} className="comment">
                    <p>{comment.text}</p>
                    <div className="comment-actions">
                      <button onClick={() => handleLikeComment(challengeIndex, commentIndex)}>
                        Like ({comment.likes})
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => handleResetChallenge(challengeIndex)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Discussionforum;
