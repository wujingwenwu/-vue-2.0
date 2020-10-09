import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    passpord: localStorage.getItem("password")
  },
  mutations: {},
  actions: {},
  modules: {}
});
