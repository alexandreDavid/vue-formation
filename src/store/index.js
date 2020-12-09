import { createStore } from 'vuex'
import favourites from './favourites'
import searchHistory from './search-history'

export default createStore({
  modules: {
    favourites,
    searchHistory
  }
})
