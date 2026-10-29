import { homePageQueryOptions } from '#/queries/home-page'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import type { HomePageQueryResult } from '../../sanity.types'
import HeroBanner from '#/components/hero-banner/hero-banner'
import SocialMediaSection from '#/components/social-media-section/social-media-section'
import FeaturedTextSection from '#/components/featured-text-section/featured-text-section'

export const Route = createFileRoute('/')({ component: Home })

type HomePageData = NonNullable<HomePageQueryResult>

function Home() {
  const { data } = useQuery(homePageQueryOptions()) as { data: HomePageData }
  console.log(data)
  if (!data) return <div>Velkomment til AOE Healing</div>
  return (
    <main>
      {data.heroBanner && <HeroBanner data={data.heroBanner} />}
      {data.socialMediaSection && (
        <SocialMediaSection data={data.socialMediaSection} />
      )}
      {data.featuredTextSection && (
        <FeaturedTextSection data={data.featuredTextSection} />
      )}
    </main>
  )
}
