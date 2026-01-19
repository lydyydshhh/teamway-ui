import { withInstall, withNoopInstall } from '@teamway-ui/utils'
import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'

import type { SFCWithInstall } from '@teamway-ui/utils'

export const TyCarousel: SFCWithInstall<typeof Carousel> & {
  CarouselItem: typeof CarouselItem
} = withInstall(Carousel, {
  CarouselItem,
})

export default TyCarousel

export const TyCarouselItem: SFCWithInstall<typeof CarouselItem> =
  withNoopInstall(CarouselItem)

export * from './src/carousel'
export * from './src/carousel-item'
export * from './src/constants'

export type { CarouselInstance, CarouselItemInstance } from './src/instance'
