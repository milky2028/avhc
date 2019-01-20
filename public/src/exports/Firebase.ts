import * as Sentry from '@sentry/browser';

const Firestore = async () => {
  const firebase = await import(/* webpackChunkName: "firebase" */'firebase/app');
  // @ts-ignore
  const fs = await import(/* webpackChunkName: "firestore" */'firebase/firestore');
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
  db.enablePersistence({ experimentalTabSynchronization: true }).catch((e) => {
    if (e.code === 'failed-precondition') {
      Sentry.captureException(e);
    } else if (e.code === 'unimplemented') {
      Sentry.captureException(e);
    }
  });
  return db;
};

export { Firestore };
