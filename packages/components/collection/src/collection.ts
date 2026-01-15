import { inject, onBeforeUnmount, onMounted, provide, ref, unref } from 'vue'
import Collection from './collection.vue'
import CollectionItem from './collection-item.vue'

import type { InjectionKey, SetupContext } from 'vue'
import type {
  TyCollectionInjectionContext,
  TyCollectionItemInjectionContext,
} from './tokens'

export const COLLECTION_ITEM_SIGN = `data-ty-collection-item`

// Make sure the first letter of name is capitalized
export const createCollectionWithScope = (name: string) => {
  const COLLECTION_NAME = `Ty${name}Collection`
  const COLLECTION_ITEM_NAME = `${COLLECTION_NAME}Item`
  const COLLECTION_INJECTION_KEY: InjectionKey<TyCollectionInjectionContext> =
    Symbol(COLLECTION_NAME)
  const COLLECTION_ITEM_INJECTION_KEY: InjectionKey<TyCollectionItemInjectionContext> =
    Symbol(COLLECTION_ITEM_NAME)

  const TyCollection = Object.assign({}, Collection, {
    name: COLLECTION_NAME,
    setup() {
      const collectionRef = ref<HTMLElement>()
      const itemMap: TyCollectionInjectionContext['itemMap'] = new Map()
      const getItems = (() => {
        const collectionTy = unref(collectionRef)

        if (!collectionTy) return []
        const orderedNodes = Array.from(
          collectionTy.querySelectorAll(`[${COLLECTION_ITEM_SIGN}]`)
        )

        const items = [...itemMap.values()]

        return items.sort(
          (a, b) => orderedNodes.indexOf(a.ref!) - orderedNodes.indexOf(b.ref!)
        )
      }) as TyCollectionInjectionContext['getItems']

      provide(COLLECTION_INJECTION_KEY, {
        itemMap,
        getItems,
        collectionRef,
      })
    },
  })

  const TyCollectionItem = Object.assign({}, CollectionItem, {
    name: COLLECTION_ITEM_NAME,
    setup(_: unknown, { attrs }: SetupContext) {
      const collectionItemRef = ref<HTMLElement>()
      const collectionInjection = inject(COLLECTION_INJECTION_KEY, undefined)!

      provide(COLLECTION_ITEM_INJECTION_KEY, {
        collectionItemRef,
      })

      onMounted(() => {
        const collectionItemTy = unref(collectionItemRef)
        if (collectionItemTy) {
          collectionInjection.itemMap.set(collectionItemTy, {
            ref: collectionItemTy,
            ...attrs,
          })
        }
      })

      onBeforeUnmount(() => {
        const collectionItemTy = unref(collectionItemRef)!
        collectionInjection.itemMap.delete(collectionItemTy)
      })
    },
  })

  return {
    COLLECTION_INJECTION_KEY,
    COLLECTION_ITEM_INJECTION_KEY,
    TyCollection,
    TyCollectionItem,
  }
}
