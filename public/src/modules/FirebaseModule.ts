interface FirebaseModule {
    namespaced: boolean;
    state: {
        firestore: any;
        auth: any;
        loggedInUser: firebase.User | null;
    };
    getters: {
        loggedInUser: (state: State) => any;
    };
    mutations: {
        setFirestore: (state: State, payload: any) => void;
        setAuth: (state: State, payload: any) => void;
    };
}

interface State {
    firestore: any;
    auth: any;
    loggedInUser: firebase.User | null;
}

const FirebaseModule: FirebaseModule = {
    namespaced: true,
    state: {
        firestore: {},
        auth: {},
        loggedInUser: null
    },
    getters: {
        loggedInUser(state) {
            state.auth.onAuthStateChanged((user: firebase.User) => {
                state.loggedInUser = user;
            });
        }
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
