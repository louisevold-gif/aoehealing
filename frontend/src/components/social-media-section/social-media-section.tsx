import type { HomePageQueryResult } from '../../../sanity.types'
import styles from './social-media-section.module.css'

type HomePageData = NonNullable<HomePageQueryResult>

export default function SocialMediaSection({
  data,
}: {
  data: NonNullable<HomePageData['socialMediaSection']>
}) {
  return (
    <section className={styles.socialMediaSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Follow us</h2>
        <div className={styles.socialMediaLinks}>
          {data.instagram && (
            <a href={data.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          )}
          {data.youtube && (
            <a href={data.youtube} target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          )}
          {data.tiktok && (
            <a href={data.tiktok} target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          )}
          {data.threads && (
            <a href={data.threads} target="_blank" rel="noopener noreferrer">
              Threads
            </a>
          )}
          {data.facebook && (
            <a href={data.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          )}
          {data.bluesky && (
            <a href={data.bluesky} target="_blank" rel="noopener noreferrer">
              Bluesky
            </a>
          )}
          {data.linkedin && (
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
