import Vue from 'vue'
import Vuex from 'vuex'
import stack from './modules/stack'
import errors from './modules/errors'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    stack, errors
  },
  strict: debug
})
