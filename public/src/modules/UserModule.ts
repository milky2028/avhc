import Module from '@/types/Module';

interface UserModule extends Module {
    state: State;
    mutations: {
        setUser: (state: State, payload: firebase.User) => void;
    };
    actions: {
        logInUser: (context: { commit: any, rootState: any }, payload: { email: string, password: string }) => void;
        setAuthState: (context: { commit: any, rootState: any }) => void;
    };
}

interface State {
    user: firebase.User | null;
}

const UserModule: UserModule = {
    namespaced: true,
    state: {
        user: null
    },
    mutations: {
        setUser(state: State, payload: firebase.User) {
            state.user = payload;
        }
    },
    actions: {
        async logInUser({ commit, rootState }, payload) {
            const user = await rootState.firebase.auth.signInWithEmailAndPassword(payload.email, payload.password);
            commit('setUser', user);
        },
        async setAuthState({ commit, rootState }) {
            rootState.firebase.auth.onAuthStateChanged((user: firebase.User) => commit('setUser', user));
        }
    }
};

export default UserModule;
