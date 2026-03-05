import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, test, vi } from 'vitest'
import NumberAnimation from '../src/number-animation.vue'

vi.mock('../src/utils', () => ({
  tween: vi.fn(({ from, to, onUpdate, onFinish }) => {
    onUpdate(from)
    onUpdate(to)
    onFinish()
    return () => {}
  }),
}))

const { tween } = await import('../src/utils')

describe('NumberAnimation.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('render test', () => {
    const wrapper = mount(NumberAnimation, {
      props: {
        to: 100,
      },
    })
    expect(wrapper.find('span').exists()).toBe(true)
  })

  test('default props', () => {
    const wrapper = mount(NumberAnimation)
    expect(wrapper.props('to')).toBe(0)
    expect(wrapper.props('precision')).toBe(0)
    expect(wrapper.props('from')).toBe(0)
    expect(wrapper.props('active')).toBe(true)
    expect(wrapper.props('duration')).toBe(3000)
  })

  test('thousands separator', async () => {
    const wrapper = mount(NumberAnimation, {
      props: {
        to: 1234567,
        from: 1234567,
        showSeparator: true,
        active: false,
      },
    })
    await nextTick()
    expect(wrapper.text().replace(/\s/g, '')).toContain('1,234,567')
  })

  test('manual play', async () => {
    const wrapper = mount(NumberAnimation, {
      props: {
        to: 100,
        active: false,
      },
    })

    const vm = wrapper.vm as InstanceType<typeof NumberAnimation> & {
      play: () => void
    }
    vm.play()
    await nextTick()
    expect(tween).toHaveBeenCalled()
  })

  test('finish event', async () => {
    const onFinish = vi.fn()
    mount(NumberAnimation, {
      props: {
        to: 100,
        onFinish,
      },
    })
    await nextTick()
    expect(onFinish).toHaveBeenCalled()
  })
})
