<template>
  <div id="app">
    <header>
      <span>Reverse Polish Calculator</span>
    </header>
    <main>
      <stack/>
      <div class="input">
        <input
          id="expr"
          v-model="expr"
          type="text"
          name="expr">
        <input
          type="submit"
          value="Add to stack"
          @click.prevent="push(expr)" >
        <buttons/>
      </div>
      <errors/>
    </main>
  </div>
</template>

<script>
import Stack from './components/Stack'
import Buttons from './components/Buttons'
import Errors from './components/Errors'

export default {
  name: 'App',
  components: {
    Stack, Buttons, Errors
  },
  data () {
    return {
      expr: '0'
    }
  },
  methods: {
    push () {
      try {
        const num = Number(this.expr.trim())
        if (isNaN(num)) {
          this.$store.commit('error', `${this.expr} is not a number!`)
        } else {
          this.$store.commit('push', num)
        }
      } catch (e) {
        this.$store.commit('error', e.toString())
      }
    }
  }
}
</script>

<style lang="sass">
body
  margin: 0

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

main
  margin-top: 4rem
  max-width: 40rem
  margin-left: auto
  margin-right: auto
  display: grid
  grid-template-columns: repeat(2, 1fr)

header
  margin: 0
  height: 56px
  padding: 0 16px 0 24px
  background-color: #35495E
  color: #ffffff

header span
  display: block
  position: relative
  font-size: 20px
  line-height: 1
  letter-spacing: .02em
  font-weight: 400
  box-sizing: border-box
  padding-top: 16px

</style>
