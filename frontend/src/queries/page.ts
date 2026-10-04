import { sanityClient } from '#/utils/sanity'
import { queryOptions } from '@tanstack/react-query'

export function getPageBySlug(slug: string) {
  return sanityClient.fetch(`*[_type == "page" && slug.current == $slug][0]`, {
    slug,
  })
}

export function pageQueryOptions(slug: string) {
  return queryOptions({
    queryKey: ['page', slug],
    queryFn: () => getPageBySlug(slug),
  })
}
