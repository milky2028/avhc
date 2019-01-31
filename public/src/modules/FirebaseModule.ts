import Module from '@/types/Module';
import * as Sentry from '@sentry/browser';

interface FirebaseModule extends Module {
    state: State;
    mutations: {
        setApp: (state: State, payload: any) => void;
        setFirestore: (state: State, payload: any) => void;
        setAuth: (state: State, payload: any) => void;
    };
    actions: {
        getApp: (context: { commit: any }) => Promise<void>;
        getFirestore: (context: { commit: any, state: State }) => Promise<void>;
        getAuth: (context: { commit: any, state: State }) => Promise<void>;
    };
}

interface State {
    app: any;
    firestore: any;
    auth: any;
}

const FirebaseModule: FirebaseModule = {
    namespaced: true,
    state: {
        app: null,
        firestore: null,
        auth: null
    },
    mutations: {
        setApp: (state, payload) => state.app = payload,
        setFirestore: (state, payload) => state.firestore = payload,
        setAuth: (state, payload) => state.auth = payload
    },
    actions: {
        getApp: async ({ commit }) => {
            const firebase = await import(/* webpackChunkName: "firebase" */'firebase/app');
            const config = {
                apiKey: 'AIzaSyBjIrG0X4W4plSyvUlv80BlRrFcrupNh5s',
                authDomain: 'aspe-f5783.firebaseapp.com',
                databaseURL: 'https://aspe-f5783.firebaseio.com',
                projectId: 'aspe-f5783',
                storageBucket: 'aspe-f5783.appspot.com',
                messagingSenderId: '214653775149'
            };
            const firebaseApp = firebase.initializeApp(config);
            commit('setApp', firebaseApp);
        },
        getFirestore: async ({ commit, state }) => {
            // @ts-ignore;
            await import(/* webpackChunkName: "firestore" */'firebase/firestore');
            const db = state.app.firestore();
            db.enablePersistence({ experimentalTabSynchronization: true })
                .catch((e: any) => {
                    if (e.code === 'failed-precondition') {
                        Sentry.captureException(e);
                    } else if (e.code === 'unimplemented') {
                        Sentry.captureException(e);
                    }
            });
            commit('setFirestore', db);
        },
        getAuth: async ({ commit, state }) => {
            // @ts-ignore;
            await import(/* webpackChunkName: "firestore" */'firebase/auth');
            const auth = state.app.auth();
            commit('setAuth', auth);
        }
    }
};

export default FirebaseModule;
