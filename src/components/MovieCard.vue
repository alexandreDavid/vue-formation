<template>
  <div class="card">
    <img :src="movieDetails.Poster" class="card-img" :alt="movieDetails.Title">
    <div class="card-body">
      <h5 class="card-title">{{ movieDetails.Title }}</h5>
      <p class="card-text">Director: {{ movieDetails.Director }}</p>
      <p class="card-text">Year: {{ movieDetails.Year }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      movieDetails: {}
    }
  },
  async created () {
    this.movieDetails = { ...this.movie }
    await this.fetchMovie()
  },
  methods: {
    async fetchMovie () {
      this.movieDetails = (await axios.get(`http://www.omdbapi.com/?i=${this.movie.imdbID}&apikey=48d1aa`)).data
    }
  }
}
</script>

<style scoped>
.card {
  height: 500px;
}
</style>
