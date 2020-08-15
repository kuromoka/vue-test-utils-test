import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'
import HelloWorld from '@/components/HelloWorld.vue'
import App from '@/App.vue'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('App.vue', () => {
  it('test', () => {
    console.log(typeof App);
    const wrapper = mount(App, {
      localVue,
      stubs: {
        'hello-world2': true,
      }
    })

    console.log(wrapper.html())
  })
})

