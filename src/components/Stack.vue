<template>
  <div class="stack">
    <stack-item v-for="(item, index) in items" :content="item" :index="index"></stack-item>
    <span v-if="!items.length">Empty stack.</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StackItem from './StackItem'

export default {
  name: 'stack',
  components: {
    StackItem
  },
  computed: mapGetters({
    items: 'stackItems'
  })
}
</script>

<style lang="sass">
.stack
  margin: .5rem
  > span
    text-align: center
    display: block
</style>
