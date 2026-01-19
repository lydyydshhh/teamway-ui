// @ts-nocheck
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { rAF } from '@teamway-ui/test-utils/tick'
import defineGetter from '@teamway-ui/test-utils/define-getter'
import Menu from '../src/menu'
import MenuGroup from '../src/menu-item-group.vue'
import MenuItem from '../src/menu-item.vue'
import SubMenu from '../src/sub-menu'

const _mount = (template: string, options = {}) =>
  mount({
    components: {
      'ty-menu': Menu,
      'ty-menu-item-group': MenuGroup,
      'ty-menu-item': MenuItem,
      'ty-sub-menu': SubMenu,
    },
    template,
    ...options,
  })

describe('menu', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('create', async () => {
    const wrapper = _mount(
      `<ty-menu>
        <ty-menu-item index="1" ref="item1">处理中心</ty-menu-item>
        <ty-menu-item index="2" ref="item2">订单管理</ty-menu-item>
      </ty-menu>`
    )
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    const item2 = await wrapper.findComponent({ ref: 'item2' })
    await item1.trigger('click')
    await nextTick()
    expect(item1.classes()).toContain('is-active')
    await item2.trigger('click')
    await nextTick()
    expect(item2.classes()).toContain('is-active')
  })

  test('background-color', async () => {
    const backgroundColor = '#f00'
    const textColor = '#000'
    const activeTextColor = '#0f0'

    const wrapper = _mount(
      `<ty-menu default-active="2"
        background-color="${backgroundColor}"
        text-color="${textColor}"
        active-text-color="${activeTextColor}">
        <ty-menu-item index="1" ref="item1">处理中心</ty-menu-item>
        <ty-menu-item index="2" ref="item2">订单管理</ty-menu-item>
      </ty-menu>`
    )
    const instance = wrapper.vm.$el
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    // const item2 = await wrapper.findComponent({ ref: 'item2' })

    expect(
      window.getComputedStyle(instance)._values['--ty-menu-bg-color']
    ).toEqual(backgroundColor)

    // We can not test final style, so comment it out for now.
    // expect(instance.style.backgroundColor).toEqual(backgroundColor)
    // expect(item1.vm.$el.style.backgroundColor).toEqual(backgroundColor)
    // expect(item1.vm.$el.style.color).toEqual(textColor)
    // expect(item2.vm.$el.style.color).toEqual(activeTextColor)
    await item1.trigger('mouseenter')
    await nextTick()
    // expect(item1.vm.$el.style.backgroundColor).toEqual('rgb(204, 0, 0)')
  })
  test('menu-item click', async () => {
    const wrapper = _mount(
      `<ty-menu>
        <ty-menu-item @click="onMenuItemClick" index="1" ref="item1">处理中心</ty-menu-item>
        <ty-menu-item index="2" ref="item2">订单管理</ty-menu-item>
      </ty-menu>`,
      {
        data() {
          return {
            clicksCount: 0,
          }
        },
        methods: {
          onMenuItemClick(item) {
            expect(item).toMatchObject({
              index: '1',
              indexPath: ['1'],
            })
            this.clicksCount = this.clicksCount + 1
          },
        },
      }
    )
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    await item1.trigger('click')
    await nextTick()
    expect((wrapper.vm as any).clicksCount).toEqual(1)
  })
  test('menu-item disabled', async () => {
    const wrapper = _mount(
      `<ty-menu default-active="2">
        <ty-menu-item index="1" ref="item1" disabled>处理中心</ty-menu-item>
        <ty-menu-item index="2" ref="item2">订单管理</ty-menu-item>
      </ty-menu>`
    )
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    const item2 = await wrapper.findComponent({ ref: 'item2' })
    expect(item2.classes()).toContain('is-active')
    await item1.trigger('click')
    await nextTick()
    expect(item1.classes().includes('is-active')).toBeFalsy()
  })
  test('open method', async () => {
    const wrapper = _mount(
      `<div>
          <ty-menu
            ref="menu"
            default-active="2"
            class="ty-menu-vertical-demo"
          >
            <ty-sub-menu index="1" ref="subMenu">
              <template #title>
                <span>导航一</span>
              </template>
              <ty-menu-item-group>
                <template #title>分组一</template>
                <ty-menu-item index="1-1">选项1</ty-menu-item>
                <ty-menu-item index="1-2">选项2</ty-menu-item>
              </ty-menu-item-group>
              <ty-menu-item-group title="分组2">
                <ty-menu-item index="1-3">选项3</ty-menu-item>
              </ty-menu-item-group>
              <ty-sub-menu index="1-4">
                <template #title>选项4</template>
                <ty-menu-item index="1-4-1">选项1</ty-menu-item>
              </ty-sub-menu>
            </ty-sub-menu>
            <ty-menu-item index="2">
              <template #title>导航二</template>
            </ty-menu-item>
          </ty-menu>
          <button @click="open"></button>
        </div>
      `,
      {
        methods: {
          open() {
            this.$refs.menu.open('1')
          },
        },
      }
    )

    const button = wrapper.find('button')
    button.trigger('click')

    await nextTick()

    const elSubMenu = wrapper.findComponent({ ref: 'subMenu' })
    expect(elSubMenu.vm.$.exposed.opened).toBeTruthy()
  })

  test('hover-bg-color', async () => {
    const wrapper = _mount(
      `<ty-menu ref="menu" default-active="2"
        :background-color="background"
        text-color="#000"
        active-text-color="#0f0">
        <ty-menu-item index="1" ref="item1">处理中心</ty-menu-item>
        <ty-menu-item index="2" ref="item2">订单管理</ty-menu-item>
      </ty-menu>`,
      {
        data() {
          return {
            background: '#008C74',
          }
        },
      }
    )
    await nextTick()
    const vm = wrapper.vm as any
    // expect(vm.$refs.menu.hoverBackground).toEqual('rgb(0, 112, 93)')
    vm.background = '#F00'
    await nextTick()
    // expect(vm.$refs.menu.hoverBackground).toEqual('rgb(204, 0, 0)')
  })

  test('menu-overflow', async () => {
    // TODO: jsdom not support `offsetWidth` and `ResizeObserver`.
  })
})

describe('default active', () => {
  test('normal active', async () => {
    const wrapper = _mount(
      `<ty-menu default-active="2">
        <ty-menu-item index="1" ref="item1">处理中心</ty-menu-item>
        <ty-menu-item index="2" ref="item2">订单管理</ty-menu-item>
      </ty-menu>`
    )
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    const item2 = await wrapper.findComponent({ ref: 'item2' })

    expect(item2.classes()).toContain('is-active')
    await item1.trigger('click')
    await nextTick()
    expect(item1.classes()).toContain('is-active')
  })
  test('dynamic active', async () => {
    const wrapper = _mount(
      `<ty-menu :default-active="active">
        <ty-menu-item index="1" ref="item1">active watch处理中心</ty-menu-item>
        <ty-menu-item index="2" ref="item2">active watch订单管理</ty-menu-item>
      </ty-menu>`,
      {
        data() {
          return {
            active: '2',
          }
        },
      }
    )
    const instance = wrapper.vm as any
    instance.active = '1'
    await nextTick()
    const item1 = await wrapper.findComponent({ ref: 'item1' })
    expect(item1.classes()).toContain('is-active')
  })
  test('vertical submenu item active', async () => {
    const wrapper = _mount(
      `<div>
        <ty-menu default-active="2-2" mode="vertical">
          <ty-menu-item index="1" ref="item1">处理中心</ty-menu-item>
          <ty-sub-menu index="2" ref="submenu">
            <template slot="title">我的工作台</template>
            <ty-menu-item index="2-1">选项1</ty-menu-item>
            <ty-menu-item index="2-2" ref="submenuItem2">选项2</ty-menu-item>
            <ty-menu-item index="2-3">选项3</ty-menu-item>
          </ty-sub-menu>
          <ty-menu-item index="3">订单管理</ty-menu-item>
        </ty-menu>
      </div>`
    )
    const submenu = await wrapper.findComponent({ ref: 'submenu' })
    const submenuItem2 = await wrapper.findComponent({ ref: 'submenuItem2' })
    expect(submenuItem2.classes()).toContain('is-active')
    await nextTick()
    expect(submenu.classes()).toContain('is-opened')
    expect(submenu.classes()).toContain('is-active')
  })
  test('horizontal submenu item active', async () => {
    const wrapper = _mount(
      `<div>
        <ty-menu default-active="2-2">
          <ty-menu-item index="1" ref="item1">处理中心</ty-menu-item>
          <ty-sub-menu index="2" ref="submenu">
            <template slot="title">我的工作台</template>
            <ty-menu-item index="2-1">选项1</ty-menu-item>
            <ty-menu-item index="2-2" ref="submenuItem2">选项2</ty-menu-item>
            <ty-menu-item index="2-3">选项3</ty-menu-item>
          </ty-sub-menu>
          <ty-menu-item index="3">订单管理</ty-menu-item>
        </ty-menu>
      </div>`
    )
    const submenu = await wrapper.findComponent({ ref: 'submenu' })
    const submenuItem2 = await wrapper.findComponent({ ref: 'submenuItem2' })
    expect(submenuItem2.classes()).toContain('is-active')
    await nextTick()
    expect(submenu.classes()).toContain('is-opened')
    expect(submenu.classes()).toContain('is-active')
  })
})

describe('submenu', () => {
  test('toggle', async () => {
    const wrapper = _mount(
      `<ty-menu>
        <ty-menu-item index="1" ref="item1">处理中心</ty-menu-item>
        <ty-sub-menu index="2" ref="submenu">
          <template slot="title">我的工作台</template>
          <ty-menu-item index="2-1">选项1</ty-menu-item>
          <ty-menu-item index="2-2" ref="submenuItem2">选项2</ty-menu-item>
          <ty-menu-item index="2-3">选项3</ty-menu-item>
        </ty-sub-menu>
        <ty-menu-item index="3">订单管理</ty-menu-item>
      </ty-menu>`
    )
    const submenu = await wrapper.findComponent({ ref: 'submenu' })
    const submenuItem2 = await wrapper.findComponent({ ref: 'submenuItem2' })
    submenu.vm.$el.querySelector('.ty-sub-menu__title').click()
    await nextTick()
    expect(submenu.classes()).toContain('is-opened')
    submenuItem2.trigger('click')
    await nextTick()
    expect(submenuItem2.classes()).toContain('is-active')
    submenu.trigger('click')
    await nextTick()
    expect(submenu.classes()).toContain('is-opened')
  })
  test('default opened', async () => {
    const wrapper = _mount(
      `<ty-menu :default-openeds="defaultOpeneds">
        <ty-menu-item index="1">default opened处理中心</ty-menu-item>
        <ty-sub-menu index="2" ref="submenu1">
          <template slot="title">default opened我的工作台</template>
          <ty-menu-item index="2-1">选项1</ty-menu-item>
          <ty-menu-item index="2-2" ref="submenu1Item2">选项2</ty-menu-item>
          <ty-menu-item index="2-3">选项3</ty-menu-item>
        </ty-sub-menu>
        <ty-sub-menu index="3" ref="submenu2">
          <template slot="title">default opened订单管理</template>
          <ty-menu-item index="3-1">选项1</ty-menu-item>
          <ty-menu-item index="3-2" ref="submenu2Item2">选项2</ty-menu-item>
          <ty-menu-item index="3-3">选项3</ty-menu-item>
        </ty-sub-menu>
      </ty-menu>`,
      {
        data() {
          return {
            defaultOpeneds: ['2', '3'],
          }
        },
      }
    )
    const submenu1 = await wrapper.findComponent({ ref: 'submenu1' })
    const submenu2 = await wrapper.findComponent({ ref: 'submenu2' })
    await nextTick()
    expect(submenu1.classes()).toContain('is-opened')
    expect(submenu2.classes()).toContain('is-opened')
    const instance = wrapper.vm as any
    instance.defaultOpeneds = ['2']
    await nextTick()
    expect(submenu1.classes()).toContain('is-opened')
    expect(submenu2.classes()).toContain('is-opened')
  })
  test('disabled', async () => {
    const wrapper = _mount(
      `<ty-menu>
        <ty-menu-item index="1" ref="item1">处理中心</ty-menu-item>
        <ty-sub-menu index="2" ref="submenu" disabled>
          <template slot="title">我的工作台</template>
          <ty-menu-item index="2-1">选项1</ty-menu-item>
          <ty-menu-item index="2-2" ref="submenuItem2">选项2</ty-menu-item>
          <ty-menu-item index="2-3">选项3</ty-menu-item>
        </ty-sub-menu>
        <ty-menu-item index="3">订单管理</ty-menu-item>
      </ty-menu>`,
      {
        data() {
          return {
            defaultOpeneds: ['2', '3'],
          }
        },
      }
    )
    const submenu = await wrapper.findComponent({ ref: 'submenu' })
    await submenu.trigger('click')
    await nextTick()
    expect(submenu.classes().includes('is-opened')).toBeFalsy()
  })
})

describe('other', () => {
  test('disabled', async () => {
    const wrapper = _mount(
      `<ty-menu unique-opened default-active="2-2">
        <ty-menu-item index="1">处理中心</ty-menu-item>
        <ty-sub-menu index="2" ref="submenu1">
          <template slot="title">我的工作台</template>
          <ty-menu-item index="2-1">选项1</ty-menu-item>
          <ty-menu-item index="2-2" ref="submenu1Item2">选项2</ty-menu-item>
          <ty-menu-item index="2-3">选项3</ty-menu-item>
        </ty-sub-menu>
        <ty-sub-menu index="3" ref="submenu2">
          <template slot="title">订单管理</template>
          <ty-menu-item index="3-1">选项1</ty-menu-item>
          <ty-menu-item index="3-2" ref="submenu2Item2">选项2</ty-menu-item>
          <ty-menu-item index="3-3">选项3</ty-menu-item>
        </ty-sub-menu>
      </ty-menu>`
    )
    const submenu2 = await wrapper.findComponent({ ref: 'submenu2' })
    submenu2.vm.$el.querySelector('.ty-sub-menu__title').click()
    await nextTick()
    const submenu1 = await wrapper.findComponent({ ref: 'submenu1' })
    expect(submenu1.classes().includes('is-opened')).toBeFalsy()
  })
  test('horizontal mode', async () => {
    const onOpen = vi.fn()
    const wrapper = _mount(
      `<ty-menu mode="horizontal" @open="onOpen">
        <ty-menu-item index="1">处理中心</ty-menu-item>
        <ty-sub-menu index="2" ref="submenu">
          <template slot="title">我的工作台</template>
          <ty-menu-item index="2-1">选项1</ty-menu-item>
          <ty-menu-item index="2-2" ref="submenuItem2">选项2</ty-menu-item>
          <ty-menu-item index="2-3">选项3</ty-menu-item>
        </ty-sub-menu>
        <ty-menu-item index="3">订单管理</ty-menu-item>
      </ty-menu>`,
      {
        methods: {
          onOpen,
        },
      }
    )
    await nextTick()

    expect(wrapper.classes()).toContain('ty-menu--horizontal')
    const submenu = wrapper.findComponent({ ref: 'submenu' })

    vi.useFakeTimers()
    await submenu.trigger('mouseenter')

    vi.runAllTimers()
    vi.useRealTimers()
    vi.clearAllTimers()

    expect(onOpen).toHaveBeenCalled()
  })
  test('menu group', async () => {
    const wrapper = _mount(
      `<ty-menu mode="vertical" default-active="1">
        <ty-menu-item-group title="分组一" ref="group1">
          <ty-menu-item index="1">导航一</ty-menu-item>
          <ty-menu-item index="2">导航二</ty-menu-item>
        </ty-menu-item-group>
        <ty-sub-menu index="5">
          <template slot="title">导航五</template>
          <ty-menu-item-group title="分组二">
            <ty-menu-item index="5-1">选项1</ty-menu-item>
            <ty-menu-item index="5-2">选项2</ty-menu-item>
          </ty-menu-item-group>
        </ty-sub-menu>
      </ty-menu>`
    )
    const group1 = await wrapper.findComponent({ ref: 'group1' })
    expect(
      group1.vm.$el.querySelector('.ty-menu-item-group__title').innerHTML
    ).toEqual('分组一')
  })
  test('dynamic menus, issue 9092', async () => {
    const wrapper = _mount(
      `<ty-menu :default-active="active">
        <ty-menu-item
          v-for="menu in menus"
          :index="menu.name"
          :key="menu.name">
          {{menu.description}}
        </ty-menu-item>
      </ty-menu>`,
      {
        data() {
          return {
            active: '',
            menus: [],
          }
        },
      }
    )
    const instance = wrapper.vm as any
    instance.menus = [
      { name: '1', description: 'happy' },
      { name: '2', description: 'new' },
      { name: '3', description: 'year' },
    ]
    await nextTick()
    instance.active = '2'

    await nextTick()
    expect(
      instance.$el.querySelector('.ty-menu-item.is-active').innerHTML
    ).toEqual('new')
  })

  test('should not generate nodes from comments, issue 21750', async () => {
    const itemWidth = 100
    const wrapper = _mount(
      `<ty-menu mode="horizontal" default-active="1">
        <!-- comment -->
        <ty-menu-item index="1">Workbenches</ty-menu-item>
        <!-- comment -->
        <ty-menu-item index="2">Users</ty-menu-item>
        <!-- comment -->
        <!-- comment -->
        <!-- comment -->
      </ty-menu>`
    )

    const menu = wrapper.findComponent({ name: 'TyMenu' })
    const menuItems = wrapper.findAllComponents({ name: 'TyMenuItem' })
    expect(menu.exists()).toBeTruthy()

    // mock size
    const styleSpy = vi
      .spyOn(window, 'getComputedStyle')
      .mockImplementation(() => {
        return {
          offsetWidth: itemWidth,
          marginLeft: 0,
          marginRight: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      })
    const menuItemSpy = vi
      .spyOn(menu.element, 'clientWidth', 'get')
      .mockReturnValue(itemWidth * 10)
    const menuItemsCleanups = menuItems.map((item) => {
      return defineGetter(item.element, 'offsetWidth', itemWidth)
    })

    menu.vm.$.exposed.handleResize()
    await rAF()
    await nextTick()

    expect(wrapper.findComponent({ name: 'TySubMenu' }).exists()).toBeFalsy()
    expect(menuItems.length).toBe(2)

    wrapper.unmount()
    menuItemsCleanups.forEach((fn) => fn())
    styleSpy.mockRestore()
    menuItemSpy.mockRestore()
  })

  test('should not generate more when width is sufficient, issue 15868', async () => {
    const itemWidth = 100

    const wrapper = _mount(
      `<ty-menu mode="horizontal" default-active="1">
        <!-- comment -->
        <ty-menu-item index="1">选项1</ty-menu-item>
        <!-- comment -->
        <ty-menu-item index="2">选项2</ty-menu-item>
        <!-- comment -->
        <ty-menu-item index="3">选项3</ty-menu-item>
        <!-- comment -->
        <ty-menu-item index="4">选项4</ty-menu-item>
        <!-- comment -->
        <ty-menu-item index="5">选项5</ty-menu-item>
      </ty-menu>`
    )

    const menu = wrapper.findComponent({ name: 'TyMenu' })
    const menuItems = wrapper.findAllComponents({ name: 'TyMenuItem' })
    expect(menu.exists()).toBeTruthy()

    // mock size
    const styleSpy = vi
      .spyOn(window, 'getComputedStyle')
      .mockImplementation(() => {
        return {
          offsetWidth: itemWidth,
          marginLeft: 0,
          marginRight: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }
      })
    const menuItemSpy = vi
      .spyOn(menu.element, 'clientWidth', 'get')
      .mockReturnValue(itemWidth * 2)
    const menuItemsCleanups = menuItems.map((item) => {
      return defineGetter(item.element, 'offsetWidth', itemWidth)
    })

    menu.vm.$.exposed.handleResize()
    await rAF()
    await nextTick()

    expect(menu.element.querySelectorAll('.ty-menu-item').length).toBe(1)
    expect(wrapper.findComponent({ name: 'TySubMenu' }).exists()).toBeTruthy()

    menuItemSpy.mockReturnValue(itemWidth * 6)
    menu.vm.$.exposed.handleResize()

    await rAF()
    await nextTick()
    expect(menu.element.querySelectorAll('.ty-menu-item').length).toBe(5)
    expect(wrapper.findComponent({ name: 'TySubMenu' }).exists()).toBeFalsy()

    wrapper.unmount()
    menuItemsCleanups.forEach((fn) => fn())
    styleSpy.mockRestore()
    menuItemSpy.mockRestore()
  })
})
