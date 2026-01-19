import installer from './defaults'

export * from '@teamway-ui/components'
export * from '@teamway-ui/constants'
export * from '@teamway-ui/directives'
export * from '@teamway-ui/hooks'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
