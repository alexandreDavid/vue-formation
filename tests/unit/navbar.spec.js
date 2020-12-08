import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

// jest.mock('@/api/movies', {

// })

describe('Navbar.vue', () => {
  it('Button enable behaviour', async () => {
    const wrapper = shallowMount(Navbar, {
      global: {
        components: {
          RouterLink: {
            template: '<div><router-link/></div>'
          }
        }
      }
    })
    const input = wrapper.find('input')
    const button = wrapper.find('button')

    expect(input.element.value).toBeFalsy()
    expect(button.element.disabled).toBe(true)

    await input.setValue('my@mail.com')

    expect(input.element.value).toBe('my@mail.com')
    expect(button.element.disabled).toBe(false)
  })
})
