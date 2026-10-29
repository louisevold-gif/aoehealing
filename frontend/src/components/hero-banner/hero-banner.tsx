import { PortableText } from '@portabletext/react'
import type { HomePageQueryResult } from '../../../sanity.types'
import styles from './hero-banner.module.css'

type HomePageData = NonNullable<HomePageQueryResult>

export default function HeroBanner({
  data,
}: {
  data: NonNullable<HomePageData['heroBanner']>
}) {
  return (
    <section className={styles.heroBanner}>
      <img src={data.image.asset?._ref || ''} className={styles.image} />
      <h1 className={styles.title}>{data.title_en_US}</h1>
      <div className={styles.description}>
        {data.description.en_US?.map((block) => {
          return <PortableText value={block} key={block._key} />
        })}
      </div>
    </section>
  )
}
