import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, it } from 'vitest'
import Options from '../src/options'
import Select from '../src/select.vue'

import type { PropType, Slots } from 'vue'
import type { VueWrapper } from '@vue/test-utils'

describe('options', () => {
  let wrapper: ReturnType<typeof mount>

  const TyOptionStub = defineComponent({
    name: 'TyOption',
    props: {
      label: String,
      value: [String, Number, Boolean, Object] as PropType<
        string | number | boolean | object
      >,
    },
    template: '<div></div>',
  })

  const getLabel = (i: number | string) => `label-${i}`

  const TyOptionGroupStub = defineComponent({
    name: 'TyOptionGroup',
    props: {
      label: String,
    },
    template: '<div><slot /></div>',
  })

  const samples = Array.from({ length: 3 })

  const createWrapper = (slots = {}) => {
    wrapper = mount(
      (_: unknown, { slots }: { slots: Slots }) => (
        <Select>
          <Options>{slots?.default?.()}</Options>
        </Select>
      ),
      {
        global: {
          components: {
            TyOption: TyOptionStub,
            TyOptionGroup: TyOptionGroupStub,
          },
        },
        slots,
      }
    ) as VueWrapper<any>
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders emit correct options', async () => {
    createWrapper({
      default: () =>
        samples.map((_, i) => <TyOptionStub label={getLabel(i)} />),
    })

    await nextTick()
  })

  it('renders emit correct options with option group', async () => {
    createWrapper({
      default: () =>
        samples.map((_, i) => (
          <TyOptionGroupStub label={getLabel(i)}>
            {{
              default: () =>
                samples.map((_, j) => (
                  <TyOptionStub
                    label={getLabel(`${i}-${j}`)}
                    value={j}
                  ></TyOptionStub>
                )),
            }}
          </TyOptionGroupStub>
        )),
    })
  })
})
