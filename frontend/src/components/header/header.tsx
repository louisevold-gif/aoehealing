import { Link } from '@tanstack/react-router'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/logo.svg" alt="logo" className={styles.logoImage} />
      </Link>
    </header>
  )
}
