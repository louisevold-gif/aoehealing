import {
  createImageUrlBuilder,
  type SanityImageSource,
} from '@sanity/image-url'
import { sanityClient } from '#/utils/sanity'

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
