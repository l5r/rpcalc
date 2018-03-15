<template>
  <div class="stack-item">
    <button @click="remove">Remove</button><span>{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: 'StackItem',
  props: ['content', 'index'],
  methods: {
    remove () {
      this.$store.commit('removeItem', this.index)
    }
  }
}
</script>

<style lang="sass">
.stack-item
  border: 1pt solid #999
  border-radius: .25rem
  padding: .25rem
  margin: .25rem
  text-align: center

  button
    float: right
</style>
