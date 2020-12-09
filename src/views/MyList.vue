<template>
  <div class="container mt-3">
    <h1>{{ resultTotal }}</h1>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div class="col" v-for="movie in movies" :key="movie">
        <MovieCard :movie="{ imdbID: movie }" class="m-2" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'

export default {
  name: 'MyList',
  components: { MovieCard },
  computed: {
    movies() {
      return this.$store.state.favourites.favourites
    },
    resultTotal() {
      let resultTotal
      let resultNumber = this.movies.length
      if (!resultNumber) {
        resultTotal = 'Aucun résultat'
      } else if (resultNumber === 1) {
        resultTotal = 'Résultat'
      } else {
        resultTotal = `Résultats (${resultNumber})`
      }
      return resultTotal
    }
  }
}
</script>