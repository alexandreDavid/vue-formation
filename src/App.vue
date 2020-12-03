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
  <div v-if="searchedValue">Ma recherche est : {{ valueToSearchInput }} - {{ searchedValue }}</div>
  <div class="alert alert-info" role="alert" v-else>
    Saisissez le nom d'un titre pour rechecher un film.
  </div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      valueToSearchInput: '',
      searchedValue: ''
    }
  },
  methods: {
    search (search) {
      this.searchedValue = search
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
