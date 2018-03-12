const state = {
  errors: []
}

const getters = {
  errors (state) { return state.errors }
}

const mutations = {
  error (state, error) {
    state.errors.push(error)
  },
  removeError (state, idx) {
    state.errors.splice(idx, 1)
  },
  clearErrors (state) {
    state.errors = []
  }
}

export default {
  state, getters, mutations
}
