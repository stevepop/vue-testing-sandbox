import { mount } from '@vue/test-utils'
import AppFormInput from '../AppFormInput'

describe('AppFormInput', () => {
   it('renders the initial model value', () => {
     let wrapper = mount(AppFormInput, {
       propsData: {
         modelValue: 'cats'
       }
     })

     expect(wrapper.find('input').element.value).toEqual('cats')
   })

   it('emits an input emit event when typing', () => {
    let wrapper = mount(AppFormInput)

    let input = wrapper.find('input')

    input.trigger('input')
    
    expect(wrapper.emitted().input).toBeTruthy()
  })

  it('emits the current input value when typing', () => {
    let wrapper = mount(AppFormInput)

    let input = wrapper.find('input')
    input.element.value = 'cats'
    input.trigger('input')
    
    expect(wrapper.emitted().input).toBeTruthy()
    expect(wrapper.emitted().input[0][0]).toEqual('cats')
  })
})