import * as firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBl81XzlnFhsfyiIvdbMzC1bwE-PCyGhu4',
  authDomain: 'react-login-example-a1e1d.firebaseapp.com',
  databaseURL: 'https://react-login-example-a1e1d.firebaseio.com',
  projectId: 'react-login-example-a1e1d',
  storageBucket: 'react-login-example-a1e1d.appspot.com',
  messagingSenderId: '289733016063',
  appId: '1:289733016063:web:e5d968c7134492c6110fca',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
