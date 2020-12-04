<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand">
    <a class="navbar-brand" href="/">
      <img class="logo" alt="Vue logo" src="./assets/logo.png">
      SeekMovie
    </a>
    <div class="collapse navbar-collapse justify-content-between">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Accueil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">A propos</router-link>
        </li>
      </ul>
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
    </div>
  </nav>
  <router-view/>
</template>

<script>
import SearchHistory from '@/store/search-history'

export default {
  name: 'App',
  data () {
    return {
      valueToSearchInput: '',
      searchedValue: ''
    }
  },
  methods: {
    search (search) {
      this.searchedValue = search
      SearchHistory.add(search)
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
