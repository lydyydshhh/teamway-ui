import {
  cloneVNode,
  defineComponent,
  isVNode,
  provide,
  reactive,
  toRef,
} from 'vue'
import { flattedChildren } from '@teamway-ui/utils'
import TyTooltip from '@teamway-ui/components/tooltip'
import { useNamespace } from '@teamway-ui/hooks'
import TyAvatar from './avatar.vue'
import { avatarGroupContextKey } from './constants'
import { avatarGroupProps } from './avatar-group-props'

export default defineComponent({
  name: 'TyAvatarGroup',
  props: avatarGroupProps,
  setup(props, { slots }) {
    const ns = useNamespace('avatar-group')

    provide(
      avatarGroupContextKey,
      reactive({
        size: toRef(props, 'size'),
        shape: toRef(props, 'shape'),
      })
    )

    return () => {
      const avatars = flattedChildren(slots.default?.() ?? [])
      let visibleAvatars = avatars

      const showCollapseAvatar =
        props.collapseAvatars && avatars.length > props.maxCollapseAvatars

      if (showCollapseAvatar) {
        visibleAvatars = avatars.slice(0, props.maxCollapseAvatars)
        const hiddenAvatars = avatars.slice(props.maxCollapseAvatars)

        visibleAvatars.push(
          <TyTooltip
            popperClass={props.popperClass}
            popperStyle={props.popperStyle}
            placement={props.placement}
            effect={props.effect}
            disabled={!props.collapseAvatarsTooltip}
          >
            {{
              default: () => (
                <TyAvatar
                  size={props.size}
                  shape={props.shape}
                  class={props.collapseClass}
                  style={props.collapseStyle}
                >
                  + {hiddenAvatars.length}
                </TyAvatar>
              ),
              content: () => (
                <div class={ns.e('collapse-avatars')}>
                  {hiddenAvatars.map((node, idx) =>
                    isVNode(node)
                      ? cloneVNode(node, { key: node.key ?? idx })
                      : node
                  )}
                </div>
              ),
            }}
          </TyTooltip>
        )
      }

      return <div class={ns.b()}>{visibleAvatars}</div>
    }
  },
})
