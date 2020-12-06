<template>
  <h4>{{ value }}</h4>
  <div class="row">
    <div class="col-3" v-for="(movie, key) in movies" :key="key">
      <div class="card">
        <img :src="movie.Poster" class="card-img" :alt="movie.Title">
      </div>
    </div>
  </div>
</template>

<script>
import MoviesApi from '@/api/movies'

export default {
  name: 'SearchHistoricValue',
  props: {
    value: String
  },
  data() {
    return {
      movies: []
    }
  },
  async created () {
    const response = await MoviesApi.find(this.value)
    console.log(response)
    this.movies = response.Search.slice(0, 4)
  },
  methods: {
    onClick () {
      this.$emit('reset-search', this.value);
    }
  }
}
</script>
