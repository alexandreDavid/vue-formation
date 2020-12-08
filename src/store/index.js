import { createStore } from 'vuex'

export default createStore({
  state: {
    favourites: []
  },
  mutations: {
    addFav (state, fav) {
      state.favourites.push(fav)
    },
    removeFav (state, fav) {
      state.favourites = state.favourites.filter(f => f !== fav)
    }
  },
  actions: {
  },

  getters: {
    isFav: (state) => (fav) => {
      return state.favourites.includes(fav)
    }
  },

  modules: {
  }
})
