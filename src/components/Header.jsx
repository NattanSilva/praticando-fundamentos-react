import IgniteLogo from '../assets/ignite-logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt='Ignite Logo' />
    </header>
  )
}
