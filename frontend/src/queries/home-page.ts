import { sanityClient } from '#/utils/sanity'
import { queryOptions } from '@tanstack/react-query'
import { defineQuery } from 'groq'

const homePageQuery = defineQuery('*[_type == "homePage"][0]')

export function getHomePage() {
  return sanityClient.fetch(homePageQuery, {})
}

export function homePageQueryOptions() {
  return queryOptions({
    queryKey: ['homePage'],
    queryFn: () => getHomePage(),
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  })
}
