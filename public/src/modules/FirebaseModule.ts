interface FirebaseModule {
    namespaced: boolean;
    state: {
        firestore: {}
    };
    mutations: {
        setFirestore: (state: { firestore: any}, payload: any) => void;
    };
}

const FirebaseModule: FirebaseModule = {
    namespaced: true,
    state: {
        firestore: {}
    },
    mutations: {
        setFirestore: (state, payload) => {
            state.firestore = payload;
        },
    }
};

export default FirebaseModule;
