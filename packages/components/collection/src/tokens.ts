import type { Ref } from 'vue'

export type CollectionItem<T = Record<string, any>> = {
  ref: HTMLElement | null
} & T

export type TyCollectionInjectionContext = {
  itemMap: Map<HTMLElement, CollectionItem>
  getItems: <T>() => CollectionItem<T>[]
  collectionRef: Ref<HTMLElement | undefined>
}

export type TyCollectionItemInjectionContext = {
  collectionItemRef: Ref<HTMLElement | undefined>
}
