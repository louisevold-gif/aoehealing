import { useState } from 'react'
import { FaRegCopy } from 'react-icons/fa'
import styles from './footer.module.css'

interface FooterProps {
  orgNumber: string | null
  businessName: string | null
  contactEmail: string | null
}

export default function Footer({
  orgNumber,
  businessName,
  contactEmail,
}: FooterProps) {
  const year = new Date().getFullYear()
  const [copyEmailButtonText, setCopyEmailButtonText] = useState('Copy email')

  const copyEmailToClipboard = () => {
    if (!contactEmail) return
    navigator.clipboard.writeText(contactEmail)
    setCopyEmailButtonText('Copied')
    setTimeout(() => {
      setCopyEmailButtonText('Copy email')
    }, 2000)
  }

  return (
    <footer className={styles.footer}>
      <section className={styles.contentSection}>
        <div className={styles.businessInfo}>
          {businessName && <span>{businessName}</span>}
          {orgNumber && <span>{orgNumber}</span>}
        </div>
        <div className={styles.contactEmail}>
          {contactEmail && (
            <div className={styles.contactEmailInput}>
              <input
                type="email"
                value={contactEmail}
                readOnly
                id="contactEmail"
              />
              <button id="copyEmailButton" onClick={copyEmailToClipboard}>
                <span id="copyEmailButtonText">
                  {' '}
                  <FaRegCopy />
                  {copyEmailButtonText}
                </span>
              </button>
            </div>
          )}
        </div>
      </section>
      <section className={styles.copyrightSection}>© {year} AOE</section>
    </footer>
  )
}
