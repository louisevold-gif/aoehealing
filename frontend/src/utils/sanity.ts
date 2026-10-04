import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET,
  apiVersion: '2026-10-04',
  useCdn: true,
})
