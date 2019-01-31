import Module from '@/types/Module';
import { Auth } from '@/exports/Firebase';

export interface UserState {
  user: firebase.User | null;
}

interface UserModule extends Module {
  state: UserState;
  mutations: {
    setUser: (state: UserState, payload: firebase.User) => void;
  };
  actions: {
    logInUserWithEmailAndPassword: (context: { commit: any }, payload: { email: string, password: string }) => void;
    setAuthState: (context: { commit: any }) => void;
  };
}

const UserModule: UserModule = {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setUser(state: UserState, payload: firebase.User) {
      state.user = payload;
    }
  },
  actions: {
    async logInUserWithEmailAndPassword({ commit }, payload) {
      const auth = await Auth();
      const user = await auth.signInWithEmailAndPassword(payload.email, payload.password);
      commit('setUser', user);
    },
    async setAuthState({ commit }) {
      const auth = await Auth();
      auth.onAuthStateChanged((user) => commit('setUser', user));
    }
  }
};

export default UserModule;
