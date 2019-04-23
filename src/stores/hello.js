const state = {
  name: ''
}
const mutations = {
  updateUser (state, user) {
    state.name = user
  }
}
const actions = {
  fetchUser ({ commit }) {
    commit('updateUser', 'Victor007')
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
