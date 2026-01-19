import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Steps from './src/steps.vue'
import Step from './src/item.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TySteps: SFCWithInstall<typeof Steps> & {
  Step: typeof Step
} = withInstall(Steps, {
  Step,
})
export default TySteps
export const TyStep: SFCWithInstall<typeof Step> = withNoopInstall(Step)

export * from './src/item'
export * from './src/steps'
export * from './src/tokens'
