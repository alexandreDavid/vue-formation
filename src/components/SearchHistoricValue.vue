<template>
  <h4>{{ value }}</h4>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
    <div class="col" v-for="(movie, key) in movies" :key="key">
      <MovieCard :movie="movie" class="m-2" />
    </div>
  </div>
</template>

<script>
import MoviesApi from '@/api/movies'
import MovieCard from './MovieCard';

export default {
  name: 'SearchHistoricValue',
  components: { MovieCard },
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
