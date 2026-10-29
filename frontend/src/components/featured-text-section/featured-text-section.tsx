import { PortableText } from '@portabletext/react'
import type { HomePageQueryResult } from '../../../sanity.types'
import styles from './featured-text-section.module.css'

type HomePageData = NonNullable<HomePageQueryResult>

export default function FeaturedTextSection({
  data,
}: {
  data: NonNullable<HomePageData['featuredTextSection']>
}) {
  return (
    <section className={styles.featuredTextSection}>
      <h2 className={styles.title}>{data.title_en_US}</h2>
      <div className={styles.text}>
        {data.text?.en_US?.map((content: any) => {
          return <PortableText value={content} key={content._key} />
        })}
      </div>
    </section>
  )
}
