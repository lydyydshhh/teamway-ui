import { withInstallFunction } from '@element-plus/utils'
import Message from './src/method'

export const TyMessage = withInstallFunction(Message, '$message')
export default TyMessage

export * from './src/message'
