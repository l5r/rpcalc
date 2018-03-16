const state = {
  /**
   * The items on the stack. Pushed items should be added to the end of the
   * array.
   * @type {Array}
   */
  items: [],
  /**
   * Last popped items. When you commit a `pop` mutation the popped items will
   * be pushed to this array.
   * @type {Array}
   */
  popped: []
}

const getters = {
  stackItems: state => state.items || [],
  popped: state => state.popped || []
}

const mutations = {
  /**
   * Adds an item to the top of the stack
   * @param  {stack.state}  state the state to push to
   * @param  {Number}       item  the item to push onto the stack
   */
  push (state, item) {
    state.items.push(item)
  },
  /**
   * Pops an item from the stack
   *
   * Popped items are returned in state.popped
   * @param  {stack.state}  state the state to pop from
   * @param  {Number}       n     amount of items to pop
   */
  pop (state, n) {
    n = n || 1
    state.popped = state.items.splice(-n, n)
  },
  /**
   * Removes an item in the stack
   * @param  {stack.state}  state state to remove the item from
   * @param  {Number}       idx   index of the item to remove
   */
  removeItem (state, idx) {
    state.items.splice(idx, 1)
  },
  /**
   * Applies opertor to two items at the top of the stack.
   * @param  {stack.state}  state state to apply to
   * @param  {OPERATORS}    op    the operator to apply
   */
  doCalculation (state, op) {
  }
}

const OPERATORS = [
  'add', 'sub', 'div', 'mul'
]

export default {
  state,
  getters,
  mutations,
  OPERATORS
}
