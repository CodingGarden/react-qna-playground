import React, { useCallback } from 'react';

const Dashboard = ({ setLoggedIn }) => {
  const onLogout = useCallback(() => setLoggedIn(false), [setLoggedIn]);
  return (
    <>
      <h1>Welcome to the dashboard! You are logged in.</h1>
      <button onClick={onLogout}>Log Out</button>
    </>
  );
};

export default Dashboard;
