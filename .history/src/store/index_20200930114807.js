import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    passpord:null || localStorage.getItem('passpord')
  },
  mutations: {
    setUser(state, data) {
      state.passpord = data
    }
  },
  actions: {},
  modules: {}
});
