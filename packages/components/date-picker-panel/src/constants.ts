import type { InjectionKey, SetupContext } from 'vue'
import type { UseNamespaceReturn } from '@teamway-ui/hooks'

interface DatePickerContext {
  slots: SetupContext['slots']
  pickerNs: UseNamespaceReturn
}

export const ROOT_PICKER_INJECTION_KEY: InjectionKey<DatePickerContext> =
  Symbol('rootPickerContextKey')

export const ROOT_PICKER_IS_DEFAULT_FORMAT_INJECTION_KEY = 'TyIsDefaultFormat'
