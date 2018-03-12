<template>
  <ul class="errors">
    <li v-for="(error, idx) in errors">
      <button @click="removeError(idx)">X</button> {{error}}
    </li>
    <button v-if="errors.length" @click="clearErrors">Clear errors</button>
  </ul>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'errors',
  computed: mapGetters(['errors']),
  methods: {
    ...mapMutations(['removeError', 'clearErrors'])
  }
}
</script>

<style lang="sass">
.errors
  list-style: none

  li
    border: solid 2pt red
    margin: .5rem
    padding: .5rem
    border-radius: 1rem
</style>
