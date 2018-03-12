const state = {
  items: [],
  popped: []
}

const getters = {
  stackItems: state => state.items || [],
  popped: state => state.popped || []
}

const mutations = {
  push (state, item) {
    state.items.push(item)
  },
  pop (state, n) {
    n = n || 1
    state.popped = state.items.splice(-n, n)
  },
  removeItem (state, idx) {
    state.items.splice(idx, 1)
  }
}

export default {
  state,
  getters,
  mutations
}
