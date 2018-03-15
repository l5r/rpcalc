import {shallow, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'

// import stack from '@/store/modules/stack'
import Stack from '@/components/Stack'
import StackItem from '@/components/StackItem'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('components/Stack.vue', () => {
  let actions, state, store, getters
  beforeEach(() => {
    state = {
      stack: {
        items: []
      }
    }

    actions = {}

    getters = {
      stackItems: sinon.stub().returns(state.stack.items)
    }

    store = new Vuex.Store({
      state,
      actions,
      getters
    })
  })

  it('shows a message when the stack is empty', () => {
    const wrapper = shallow(Stack, {store, localVue})

    expect(wrapper.find('span').text()).to.contain('Empty stack.')
  })

  it('displays the correct number of items', () => {
    getters.stackItems.returns([1, 2])
    const wrapper = shallow(Stack, {localVue, store})

    expect(wrapper.findAll(StackItem).length).to.equal(2)
  })

  it('passes the items to its children', () => {
    getters.stackItems.returns([1, 2])
    const wrapper = shallow(Stack, {store, localVue})

    const itemProps = wrapper.findAll(StackItem).wrappers
      .map((w) => w.props())
    expect(itemProps).to.deep.include({content: 1, index: 0})
  })
})
