export default {
  setUser({ commit }, user) {
    commit('setUser', user);
  },
  setLoading({ commit }, loading) {
    commit('setLoading', loading);
  },
};
