import Module from '@/types/Module';
import { Auth } from '@/exports/Firebase';
import { Commit } from 'vuex';
import router from '@/router';

export interface UserState {
  user: firebase.User | null;
}

interface UserModule extends Module {
  state: UserState;
  mutations: {
    setUser: (state: UserState, payload: firebase.User) => void;
  };
  actions: {
    logInUserWithEmailAndPassword: (context: { commit: Commit }, payload: { email: string, password: string }) => void;
    setAuthState: (context: { commit: Commit }) => void;
    signOut: (context: { commit: Commit }) => void;
  };
}

const UserModule: UserModule = {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    setUser: (state, payload) => state.user = payload
  },
  actions: {
    logInUserWithEmailAndPassword: async ({ commit }, payload) => {
      const auth = await Auth();
      const user = await auth.signInWithEmailAndPassword(payload.email, payload.password);
      commit('setUser', user.user);
    },
    signOut: async ({ commit }) => {
      const auth = await Auth();
      await auth.signOut();
      router.push('/');
    },
    setAuthState: async ({ commit }) => {
      const auth = await Auth();
      auth.onAuthStateChanged((user) => commit('setUser', user));
    }
  }
};

export default UserModule;
