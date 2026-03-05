import { cAF, rAF } from '@teamway-ui/utils'

export interface TweenProps {
  from: number
  to: number
  duration: number
  onUpdate: (currentValue: number) => void
  onFinish: () => void
}

const easeOut = (t: number): number => 1 - (1 - t) ** 5

export function tween(props: TweenProps): () => void {
  const { from, to, duration, onUpdate, onFinish } = props
  const start = performance.now()
  let frameHandle: number | undefined

  const tick = () => {
    const current = performance.now()
    const elapsed = Math.min(current - start, duration)
    const progress = duration <= 0 ? 1 : elapsed / duration
    const currentValue = from + (to - from) * easeOut(progress)
    onUpdate(currentValue)

    if (elapsed >= duration) {
      onFinish()
      return
    }

    frameHandle = rAF(tick)
  }

  frameHandle = rAF(tick)

  return () => {
    if (frameHandle !== undefined) cAF(frameHandle)
  }
}
