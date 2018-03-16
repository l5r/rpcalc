import stack from '@/store/modules/stack'

const {state, getters, mutations} = stack

describe('store/stack.js', () => {
  it('starts with an empty state', () => {
    // This test is here so we don't forget to update the other tests if we
    // ever change the default state, also don't forget to also update other
    // parts of the code that assume this state.
    expect(state).to.eql({
      items: [],
      popped: []
    })
  })

  describe('getters', () => {
    it('returns sensible defaults with an empty state', () => {
      expect(getters.stackItems({})).to.deep.equal([])
    })
  })

  describe('mutations', () => {
    it('rejects NaN to be pushed', () => {
      expect(() => mutations.push(state, NaN)).to.throw()
    })

    it('adds items to the stack', () => {
      let _state = {items: [0]}

      mutations.push(_state, 1)

      expect(_state.items).to.include(1)
    })

    it('pops items from the stack', () => {
      let _state = {
        items: [0, 1, 2, 3],
        popped: []
      }

      mutations.pop(_state)
      expect(_state.popped).to.deep.equal([3])

      mutations.pop(_state, 2)
      expect(_state.popped).to.deep.equal([1, 2])
    })

    it('maintains a fifo order', () => {
      let _state = {
        items: [0, 1, 2, 3],
        popped: []
      }

      mutations.push(_state, 10)
      mutations.push(_state, 11)
      mutations.push(_state, 12)
      expect(_state.items).to.eql([0, 1, 2, 3, 10, 11, 12])

      mutations.pop(_state)
      expect(_state.items).to.eql([0, 1, 2, 3, 10, 11])
      expect(_state.popped).to.eql([12])

      mutations.pop(_state, 3)
      expect(_state.items).to.eql([0, 1, 2])
      expect(_state.popped).to.eql([3, 10, 11])
    })

    it('removes items', () => {
      let _state = {
        items: [0, 10, 20, 30, 40]
      }

      mutations.removeItem(_state, 2)
      expect(_state.items).to.eql([0, 10, 30, 40])
    })

    it('does calculations', () => {
      let _state = {items: [1, 2], popped: []}

      mutations.doCalculation(_state, 'sub')
      expect(_state.items.pop()).to.eql(1)
    })

    it('rejects bad calculations', () => {
      let _state = {items: [1, 0], popped: []}

      expect(() => {
        mutations.doCalculation(_state, 'div')
      }).to.throw()
    })

    it('rejects invalid operators', () => {
      let _state = {items: [1, 2], popped: []}

      expect(() => {
        mutations.doCalculation(_state, 'qmfqds')
      }).to.throw()
    })
  })
})
