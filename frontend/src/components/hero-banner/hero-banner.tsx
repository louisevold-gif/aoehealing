import { PortableText } from '@portabletext/react'
import type {
  HomePageQueryResult,
  SettingsQueryResult,
} from '../../../sanity.types'
import { urlFor } from '#/utils/image'
import styles from './hero-banner.module.css'
import Button from '../button/button'
import { useQuery } from '@tanstack/react-query'
import { settingsQueryOptions } from '#/queries/settings'
import { SavvyCalButton } from '#/integrations/savvycal/savvycal'

type HomePageData = NonNullable<HomePageQueryResult>
type SettingsData = NonNullable<SettingsQueryResult>

const settings = useQuery(settingsQueryOptions()) as { data: SettingsData }

export default function HeroBanner({
  data,
}: {
  data: NonNullable<HomePageData['heroBanner']>
}) {
  const imageUrl = data.image.asset
    ? urlFor(data.image).width(1600).auto('format').url()
    : null

  return (
    <>
      <section
        className={styles.heroBanner}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.45)),' +
            `url(${imageUrl})`,
        }}
      >
        <div className={styles.content}>
          <h1 className={styles.title}>{data.title_en_US}</h1>
          <div className={styles.description}>
            {data.description.en_US?.map((block) => {
              return <PortableText value={block} key={block._key} />
            })}
          </div>
          {data.buttonType === 'booking' && data.button_text_en_US && (
            <SavvyCalButton link={settings.data.savvyCalLink ?? undefined}>
              {data.button_text_en_US}
            </SavvyCalButton>
          )}
          {data.buttonType === 'link' &&
            data.button_text_en_US &&
            data.button_link && (
              <a href={data.button_link ?? undefined}>
                <Button type="button">{data.button_text_en_US}</Button>
              </a>
            )}
        </div>
      </section>
    </>
  )
}
