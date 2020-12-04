<template>
  <div class="container mt-3">
    <div class="alert alert-info" role="alert">
      Saisissez le nom d'un titre pour rechecher un film.
    </div>
    <h4>Historique</h4>
    <div class="list-group">
      <SearchHistoricValue
        v-for="(searchHistoryValue, key) in searchHistoryList"
        :key="key"
        :value="searchHistoryValue"/>
    </div>
  </div>
</template>

<script>
import SearchHistoricValue from '@/components/SearchHistoricValue.vue'
import SearchHistory from '@/store/search-history'

export default {
  name: 'Home',
  components: {
    SearchHistoricValue
  },
  data () {
    return {
      searchHistoryList: SearchHistory.state.list
    }
  }
}
</script>
