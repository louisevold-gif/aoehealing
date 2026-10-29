import { sanityClient } from '#/utils/sanity'
import { queryOptions } from '@tanstack/react-query'
import { defineQuery } from 'groq'

const pageQuery = defineQuery('*[_type == "page" && slug.current == $slug][0]')

export function getPageBySlug(slug: string) {
  return sanityClient.fetch(pageQuery, {
    slug,
  })
}

export function pageQueryOptions(slug: string) {
  return queryOptions({
    queryKey: ['page', slug],
    queryFn: () => getPageBySlug(slug),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })
}
