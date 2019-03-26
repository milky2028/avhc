import * as Sentry from '@sentry/browser';
const Firebase = import(/* webpackChunkName: 'firebase' */'firebase/app');
// @ts-ignore
const FirestoreImport = import(/* webpackChunkName: 'firestore' */'firebase/firestore');
// @ts-ignore
const AuthImport = import(/* webpackChunkName: 'auth' */'firebase/auth');

export const productionConfig = {
  apiKey: 'AIzaSyBjIrG0X4W4plSyvUlv80BlRrFcrupNh5s',
  authDomain: 'aspe-f5783.firebaseapp.com',
  databaseURL: 'https://aspe-f5783.firebaseio.com',
  projectId: 'aspe-f5783',
  storageBucket: 'aspe-f5783.appspot.com',
  messagingSenderId: '214653775149'
};

const Auth = async () => {
  const fb = await Firebase;
  const app = (fb.apps.length < 1) ? fb.initializeApp(productionConfig) : fb.app();
  await AuthImport;
  return app.auth();
};

const Firestore = async () => {
  const fb = await Firebase;
  const app = (fb.apps.length < 1) ? fb.initializeApp(productionConfig) : fb.app();
  await FirestoreImport;
  const db = app.firestore();
  if (!app.firestore) {
    db.enablePersistence().catch((e) => {
      if (e.code === 'failed-precondition') {
        Sentry.captureException(e);
      } else if (e.code === 'unimplemented') {
        Sentry.captureException(e);
      }
    });
  }
  return db;
};

export { Auth, Firestore };
