import React, { useCallback } from 'react';

const Dashboard = ({ logout }) => {
  return (
    <>
      <h1>Welcome to the dashboard! You are logged in.</h1>
      <button onClick={logout}>Log Out</button>
    </>
  );
};

export default Dashboard;
