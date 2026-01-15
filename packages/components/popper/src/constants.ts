import type { CSSProperties, ComputedRef, InjectionKey, Ref } from 'vue'
import type { Instance } from '@popperjs/core'

export type Measurable = {
  getBoundingClientRect: () => DOMRect
}

/**
 * triggerRef indicates the element that triggers popper
 * contentRef indicates the element of popper content
 * referenceRef indicates the element that popper content relative with
 */
export type TyPopperInjectionContext = {
  triggerRef: Ref<Measurable | undefined>
  contentRef: Ref<HTMLElement | undefined>
  popperInstanceRef: Ref<Instance | undefined>
  referenceRef: Ref<Measurable | undefined>
  role: ComputedRef<string>
}

export type TyPopperContentInjectionContext = {
  arrowRef: Ref<HTMLElement | undefined>
  arrowStyle: ComputedRef<CSSProperties>
}

export const POPPER_INJECTION_KEY: InjectionKey<TyPopperInjectionContext> =
  Symbol('popper')

export const POPPER_CONTENT_INJECTION_KEY: InjectionKey<TyPopperContentInjectionContext> =
  Symbol('popperContent')
