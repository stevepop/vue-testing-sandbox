import { mount } from '@vue/test-utils'
import Component from './Component'

describe('test', () => {
  it('works', () => {
    let wrapper = mount(Component)

    expect(wrapper.html()).toContain('Hello Vue')
  })
})