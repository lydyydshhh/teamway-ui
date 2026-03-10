import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Grid from '../src/grid.vue'
import GridItem from '../src/grid-item.vue'

describe('Grid.vue', () => {
  test('render grid', () => {
    const wrapper = mount(Grid, {
      slots: {
        default: '<div>item</div>',
      },
    })
    expect(wrapper.classes()).toContain('ty-grid')
    expect(wrapper.text()).toContain('item')
  })

  test('render grid-item in grid', () => {
    const wrapper = mount(Grid, {
      slots: {
        default: '<grid-item>content</grid-item>',
      },
      global: {
        components: {
          GridItem,
        },
      },
    })
    expect(wrapper.text()).toContain('content')
  })

  test('custom cols and gap', () => {
    const wrapper = mount(Grid, {
      props: {
        cols: 3,
        rowGap: 10,
        colGap: 20,
      },
      slots: {
        default: '<div>item</div>',
      },
    })
    const style = wrapper.element.style
    expect(style.gridTemplateColumns).toBe('repeat(3, minmax(0px, 1fr))')
    expect(style.gap).toBe('10px 20px')
  })
})
