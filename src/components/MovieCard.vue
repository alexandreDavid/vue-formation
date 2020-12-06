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
import MoviesApi from '@/api/movies'

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
      this.movieDetails = await MoviesApi.get(this.movie.imdbID)
    }
  }
}
</script>

<style scoped>
.card {
  height: 500px;
}
</style>
