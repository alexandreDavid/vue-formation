<template>
  <div class="container mt-3">
    <template v-if="!loading">
      <h1>{{ resultTotal }}</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div class="col" v-for="(movie, key) in movies" :key="key">
          <MovieCard :movie="movie" class="m-2" />
        </div>
      </div>
    </template>
    <div class="spinner-border" role="status" v-else>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>

<script>
import MoviesApi from '@/api/movies'
import MovieCard from '@/components/MovieCard';

export default {
  name: 'Result',
  components: { MovieCard },
  data () {
    return {
      loading: true,
      movies: [],
      totalResults: 0
    }
  },
  watch: {
    '$route.query.search': 'fetchMovies'
  },
  created () {
    this.fetchMovies()
  },
  methods: {
    async fetchMovies () {
      this.loading = true
      const response = await MoviesApi.find(this.$route.query.search)
      this.movies = response.Search
      this.totalResults = response.totalResults || 0
      this.loading = false
    },
  },
  computed: {
    resultTotal() {
      let resultTotal
      if (!this.totalResults) {
        resultTotal = 'Aucun résultat'
      } else if (this.totalResults === 1) {
        resultTotal = 'Résultat'
      } else {
        resultTotal = `Résultats (${this.totalResults})`
      }
      return resultTotal
    }
  }
}
</script>