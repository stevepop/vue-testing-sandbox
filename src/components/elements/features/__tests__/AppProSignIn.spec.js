import { mount, RouterLinkStub } from '@vue/test-utils'
import AppProSignIn from '../AppProSignIn'

describe('AppProSignIn', () => {
  it('renders a sign in text', () => {
    let wrapper = mount(AppProSignIn, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
     expect(wrapper.find('a').props().to.name).toEqual('auth-signin')
  })
})

