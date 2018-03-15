<template>
  <ul class="buttons">
    <li
      v-for="(sym, id) in actions"
      :key="id">
      <button @click="doAction(id)">{{ sym }}</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Buttons',
  data () {
    return {
      actions: {'add': '+', 'mul': '×', 'div': '÷', 'sub': '-'}
    }
  },
  methods: {
    pop (n) {
      this.$store.commit('pop', n)
      return n ? this.$store.getters.popped : this.$store.getters.popped[0]
    },
    push (item) {
      // Manual error handling...
      // TODO: move this to the store
      if (isNaN(item)) {
        this.$store.commit('error', 'Oops! You mathsd wrong!')
        // TODO: Tell the user why
      } else {
        return this.$store.commit('push', item)
      }
    },
    doAction (id) {
      return this[id]()
    },

    add () {
      return this.push(this.pop() + this.pop())
    },
    mul () {
      return this.push(this.pop() * this.pop())
    },
    div () {
      return this.push(this.pop() / this.pop())
    },
    sub () {
      return this.push(this.pop() - this.pop())
    }
  }
}
</script>

<style lang="sass">

.buttons
  list-style: none

</style>
