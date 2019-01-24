import Module from '@/types/Module';

interface FirebaseModule extends Module {
    state: {
        firestore: any;
        auth: any;
    };
    mutations: {
        setFirestore: (state: State, payload: any) => void;
        setAuth: (state: State, payload: any) => void;
    };
}

interface State {
    firestore: any;
    auth: any;
}

const FirebaseModule: FirebaseModule = {
    namespaced: true,
    state: {
        firestore: {},
        auth: {}
    },
    mutations: {
        setFirestore: (state, payload) => {
            state.firestore = payload;
        },
        setAuth: (state, payload) => {
            state.auth = payload;
        }
    }
};

export default FirebaseModule;
