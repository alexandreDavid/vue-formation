import axios from 'axios'
const apikey = '48d1aa'

export default {
  async get(id) {
    return (await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${apikey}`)).data
  },

  async find(search, page = 1) {
    return (await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=${apikey}&type=movie&page=${page}`)).data
  }
}
