<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand">
    <a class="navbar-brand" href="/">
      <img class="logo" alt="Vue logo" src="@/assets/logo.png">
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
        <li class="nav-item">
          <router-link class="nav-link" to="/my-list">Ma liste</router-link>
        </li>
      </ul>
      <form class="form-inline" @submit.prevent="search(valueToSearchInput)">
        <input class="form-control mr-sm-2"
          v-model="valueToSearchInput"
          type="search"
          placeholder="Saisissez un titre"
          aria-label="Saisissez un titre">
        <button class="btn btn-success my-2 my-sm-0" type="submit" :disabled="!isButtonEnable">
          Rechercher
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      valueToSearchInput: '',
      searchedValue: '',
      isButtonEnable: false
    }
  },
  methods: {
    search (search) {
      this.searchedValue = search
      this.$store.commit('searchHistory/add', search)
      this.$router.push({ path: 'result', query: { search } })
    }
  },
  watch: {
    valueToSearchInput(value) {
      this.isButtonEnable = value.length > 2
    }
  }
}
</script>

<style lang="scss">
.navbar .logo {
  width: 30px;
}
</style>
