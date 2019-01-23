import { mount } from '@vue/test-utils'
import Component from './Component'

describe('test', () => {
  it('works', () => {
    let wrapper = mount(Component)
    expect(true).toBe(true)
  })
})