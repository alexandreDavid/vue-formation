export default {
  namespaced: true,

  state: () => ({
    list: []
  }),

  mutations: {
    add (state, value) {
      state.list.unshift(value)
    }
  }
}
