<template>
  <component
    :is="tag"
    :id="groupId"
    :class="ns.b('group')"
    role="group"
    :aria-label="
      !isLabeledByFormItem ? ariaLabel || 'checkbox-group' : undefined
    "
    :aria-labelledby="isLabeledByFormItem ? formItem?.labelId : undefined"
  >
    <slot>
      <component
        :is="optionComponent"
        v-for="(item, index) in options"
        :key="index"
        v-bind="getOptionProps(item)"
      />
    </slot>
  </component>
</template>

<script lang="ts" setup>
import { computed, nextTick, provide, toRefs, watch } from 'vue'
import { isEqual, omit, pick } from 'lodash-unified'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@teamway-ui/constants'
import { debugWarn } from '@teamway-ui/utils'
import { useNamespace } from '@teamway-ui/hooks'
import {
  useFormDisabled,
  useFormItem,
  useFormItemInputId,
} from '@teamway-ui/components/form'
import {
  checkboxDefaultProps,
  checkboxGroupEmits,
  checkboxGroupProps,
} from './checkbox-group'
import { checkboxGroupContextKey } from './constants'
import TyCheckbox from './checkbox.vue'
import TyCheckboxButton from './checkbox-button.vue'

import type { CheckboxGroupValueType } from './checkbox-group'

defineOptions({
  name: 'TyCheckboxGroup',
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)
const ns = useNamespace('checkbox')

const checkboxDisabled = useFormDisabled()
const { formItem } = useFormItem()
const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem,
})

const changeEvent = async (value: CheckboxGroupValueType) => {
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  emit(CHANGE_EVENT, value)
}

const modelValue = computed({
  get() {
    return props.modelValue
  },
  set(val: CheckboxGroupValueType) {
    changeEvent(val)
  },
})

const aliasProps = computed(() => ({
  ...checkboxDefaultProps,
  ...props.props,
}))
const getOptionProps = (option: Record<string, any>) => {
  const { label, value, disabled } = aliasProps.value
  const base = {
    label: option[label],
    value: option[value],
    disabled: option[disabled],
  }
  return { ...omit(option, [label, value, disabled]), ...base }
}

const optionComponent = computed(() =>
  props.type === 'button' ? TyCheckboxButton : TyCheckbox
)

provide(checkboxGroupContextKey, {
  ...pick(toRefs(props), [
    'size',
    'min',
    'max',
    'validateEvent',
    'fill',
    'textColor',
  ]),
  disabled: checkboxDisabled,
  modelValue,
  changeEvent,
})

watch(
  () => props.modelValue,
  (newVal, oldValue) => {
    if (props.validateEvent && !isEqual(newVal, oldValue)) {
      formItem?.validate('change').catch((err) => debugWarn(err))
    }
  }
)
</script>
