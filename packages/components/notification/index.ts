import { withInstallFunction } from '@teamway-ui/utils'
import Notify from './src/notify'

export const TyNotification = withInstallFunction(Notify, '$notify')
export default TyNotification

export * from './src/notification'
