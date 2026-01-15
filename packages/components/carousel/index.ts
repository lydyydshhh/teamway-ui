import { withInstall, withNoopInstall } from '@element-plus/utils'
import Carousel from './src/carousel.vue'
import CarouselItem from './src/carousel-item.vue'

import type { SFCWithInstall } from '@element-plus/utils'

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
