import { reactive } from 'vue'

export default {
  state: reactive({
    list: []
  }),

  add (value) {
    this.state.list.unshift(value)
  }
}
