<template>
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="/">
      <img class="logo" alt="Vue logo" src="./assets/logo.png">
      SeekMovie
    </a>
    <form class="form-inline" @submit.prevent="search(valueToSearchInput)">
      <input class="form-control mr-sm-2"
        v-model="valueToSearchInput"
        type="search"
        placeholder="Saisissez un titre"
        aria-label="Saisissez un titre">
      <button class="btn btn-success my-2 my-sm-0" type="submit">
        Rechercher
      </button>
    </form>
  </nav>
  <div class="container mt-3">
    <div>Ma recherche est : {{ valueToSearchInput }} - {{ searchedValue }}</div>
    <div class="alert alert-info" role="alert" v-if="!searchedValue">
      Saisissez le nom d'un titre pour rechecher un film.
    </div>
    <h4>Historique</h4>
    <div class="list-group">
      <SearchHistoricValue
        v-for="(searchHistoryValue, key) in searchHistoryValues"
        :key="key"
        :value="searchHistoryValue"
        @reset-search="changeSearch"/>
    </div>
  </div>
</template>

<script>
import SearchHistoricValue from './components/SearchHistoricValue'

export default {
  name: 'App',
  components: {
    SearchHistoricValue
  },
  data () {
    return {
      valueToSearchInput: '',
      searchedValue: '',
      searchHistoryValues: []
    }
  },
  methods: {
    search (search) {
      this.searchedValue = search
      this.searchHistoryValues.unshift(search);
    },
    changeSearch (newValue) {
      this.searchedValue = newValue
      this.valueToSearchInput = newValue
    }
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;

  .navbar .logo {
    width: 30px;
  }
}

</style>
