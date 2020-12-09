const favourites = (localStorage.favourites && localStorage.favourites.split(',')) || []

export default {
  namespaced: true,
  state: () => ({
    favourites
  }),
  mutations: {
    addFav (state, fav) {
      state.favourites.push(fav)
      localStorage.favourites = state.favourites
    },
    removeFav (state, fav) {
      state.favourites = state.favourites.filter(f => f !== fav)
      localStorage.favourites = state.favourites
    }
  },
  actions: {
  },

  getters: {
    isFav: (state) => (fav) => {
      return state.favourites.includes(fav)
    }
  }
}
