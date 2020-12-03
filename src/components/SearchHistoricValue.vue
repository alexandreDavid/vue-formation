<template>
  <button type="button" class="list-group-item list-group-item-action" @click="onClick">
    {{ value }}
  </button>
</template>

<script>
export default {
  name: 'SearchHistoricValue',
  props: {
    value: String
  },
  methods: {
    onClick () {
      this.$emit('reset-search', this.value);
    }
  }
}
</script>
