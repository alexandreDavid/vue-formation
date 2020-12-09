<template>
  <div class="card" @click="displayModal = true" v-bind="$attrs">
    <img :src="movieDetails.Poster" class="card-img" :alt="movieDetails.Title">
    <div class="card-body">
      <h5 class="card-title">{{ movieDetails.Title }}</h5>
      <p class="card-text">Director: {{ movieDetails.Director }}</p>
      <p class="card-text">Année: {{ movieDetails.Year }}</p>
    </div>
  </div>
  <Modal v-if="displayModal" @close="displayModal = false">
    <template #header>
      <h5 class="modal-title">{{ movieDetails.Title }}</h5>
    </template>
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="movieDetails.Poster" class="card-img" :alt="movieDetails.Title">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <p class="card-text"><b>Acteurs :</b> {{ movieDetails.Actors }}</p>
          <p class="card-text"><b>Synopsis :</b> {{ movieDetails.Plot }}</p>
          <p class="card-text"><small class="text-muted">Date de sortie : {{ movieDetails.Released }}</small></p>
        </div>
      </div>
    </div>
    <template #footer>
      <button type="button" v-if="isFav" class="btn btn-primary" data-dismiss="modal" @click="removeFromFav">Supprimer de ma liste</button>
      <button type="button" v-else class="btn btn-primary" data-dismiss="modal" @click="addToFav">Ajouter à ma liste</button>
      <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="displayModal = false">Fermer</button>
    </template>
  </Modal>
</template>

<script>
import MoviesApi from '@/api/movies'
import Modal from './Modal'

export default {
  name: 'MovieCard',
  components: { Modal },
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      movieDetails: {},
      displayModal: false
    }
  },
  async created () {
    this.movieDetails = { ...this.movie }
    await this.fetchMovie()
  },
  methods: {
    async fetchMovie () {
      this.movieDetails = await MoviesApi.get(this.movie.imdbID)
    },
    addToFav () {
      this.$store.commit('favourites/addFav', this.movie.imdbID)
    },
    removeFromFav () {
      this.$store.commit('favourites/removeFav', this.movie.imdbID)
    }
  },
  computed: {
    isFav() {
      return this.$store.getters['favourites/isFav'](this.movie.imdbID)
    }
  }
}
</script>

<style scoped>
.card {
  height: 500px;
}
</style>
