import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBjIrG0X4W4plSyvUlv80BlRrFcrupNh5s',
  authDomain: 'aspe-f5783.firebaseapp.com',
  databaseURL: 'https://aspe-f5783.firebaseio.com',
  projectId: 'aspe-f5783',
  storageBucket: 'aspe-f5783.appspot.com',
  messagingSenderId: '214653775149'
};
const settings = { timestampsInSnapshots: true };
const firebaseApp = firebase.initializeApp(config);
const firestore = firebase.firestore();
firestore.settings(settings);

export { firestore };
