import React, { useCallback } from 'react';

const LandingPage = ({ login }) => {
  return (
    <>
      <h1>Hello! You are not logged in.</h1>
      <button onClick={login}>Log In</button>
    </>
  );
};

export default LandingPage;
