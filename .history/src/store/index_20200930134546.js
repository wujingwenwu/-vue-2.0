import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    passpords:localStorage.getItem('passpord')
  },
  mutations: {
    setUser(state, data) {
      state.passpords = data
    }
  },
  actions: {},
  modules: {}
});
