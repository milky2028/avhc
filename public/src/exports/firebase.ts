import firebase from 'firebase/app';
import 'firebase/firestore';
import Raven from 'raven-js';

const config = {
  apiKey: 'AIzaSyBjIrG0X4W4plSyvUlv80BlRrFcrupNh5s',
  authDomain: 'aspe-f5783.firebaseapp.com',
  databaseURL: 'https://aspe-f5783.firebaseio.com',
  projectId: 'aspe-f5783',
  storageBucket: 'aspe-f5783.appspot.com',
  messagingSenderId: '214653775149'
};
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
db.enablePersistence().catch((e) => {
  if (e.code === 'failed-precondition') {
    Raven.captureException(e);
  } else if (e.code === 'unimplemented') {
    Raven.captureException(e);
  }
});

export { db };
