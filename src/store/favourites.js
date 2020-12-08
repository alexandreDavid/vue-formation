import { ref } from 'vue'

export default {
  state: {
    list: ref([])
  },

  add (movie) {
    this.state.list.value.push(movie.imdbID)
  },

  remove (movie) {
    this.state.list.value = this.state.list.value.filter(f => f !== movie.imdbID)
  },

  inList(movie) {
    return this.state.list.value.includes(movie.imdbID)
  }
}
