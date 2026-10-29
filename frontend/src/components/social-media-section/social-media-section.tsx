import type { HomePageQueryResult } from '../../../sanity.types'
import styles from './social-media-section.module.css'
import { SiInstagram, SiYoutube } from 'react-icons/si'

type HomePageData = NonNullable<HomePageQueryResult>

export default function SocialMediaSection({
  data,
}: {
  data: NonNullable<HomePageData['socialMediaSection']>
}) {
  return (
    <section className={styles.socialMediaSection}>
      <h2 className={styles.title}>
        <i>Follow me on</i>
      </h2>
      <div className={styles.socialMediaLinks}>
        {data.instagram && (
          <a
            href={data.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <SiInstagram />
          </a>
        )}
        {data.youtube && (
          <a
            href={data.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            title="YouTube"
          >
            <SiYoutube />
          </a>
        )}
        {data.tiktok && (
          <a
            href={data.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            title="TikTok"
          >
            TikTok
          </a>
        )}
        {data.threads && (
          <a
            href={data.threads}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
            title="Threads"
          >
            Threads
          </a>
        )}
        {data.facebook && (
          <a
            href={data.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            title="Facebook"
          >
            Facebook
          </a>
        )}
        {data.bluesky && (
          <a
            href={data.bluesky}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky"
            title="Bluesky"
          >
            Bluesky
          </a>
        )}
        {data.linkedin && (
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            LinkedIn
          </a>
        )}
      </div>
    </section>
  )
}
