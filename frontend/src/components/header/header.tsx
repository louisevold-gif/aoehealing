import { Link } from '@tanstack/react-router'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt="logo"
          className={styles.logoImage}
        />
      </Link>
    </header>
  )
}
