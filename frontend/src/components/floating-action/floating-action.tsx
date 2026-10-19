import styles from './floating-action.module.css'

export default function FloatingAction({
  children,
  onClick,
  ariaLabel,
}: {
  children: React.ReactNode
  onClick: () => void
  ariaLabel?: string
}) {
  return (
    <div className={styles.floatingAction}>
      <button
        type="button"
        className={styles.floatingActionButton}
        onClick={onClick}
        aria-label={ariaLabel ?? 'Floating action'}
      >
        {children}
      </button>
    </div>
  )
}
