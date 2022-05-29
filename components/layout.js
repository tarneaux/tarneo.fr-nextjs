import styles from './styles/layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.parent}>
      <div className={styles.children}>
        {children}
      </div>
    </div>
  )
}