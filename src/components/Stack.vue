<template>
  <div class="stack">
    <stack-item
      v-for="(item, index) in items"
      :content="item"
      :index="index"
      :key="index"/>
    <span v-if="!items.length">Empty stack.</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StackItem from './StackItem'

export default {
  name: 'Stack',
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
