import { useEffect, useCallback, useState } from 'react';

import firebase from './firebase';

function useFirebaseAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((newUser) => {
      if (newUser) {
        setUser(newUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const login = useCallback(async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      console.log(result.user);
      setUser(result.user);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const logout = useCallback(() => {
    firebase.auth().signOut();
  }, []);

  return {
    user,
    login,
    logout,
  };
}

export default useFirebaseAuth;
