import { sanityClient } from '#/utils/sanity'
import { queryOptions } from '@tanstack/react-query'
import { defineQuery } from 'groq'

const settingsQuery = defineQuery('*[_id == "settings"][0]{ savvyCalLink }')

export function getSettings() {
  return sanityClient.fetch(settingsQuery)
}

export function settingsQueryOptions() {
  return queryOptions({
    queryKey: ['settings'],
    queryFn: () => getSettings(),
  })
}
