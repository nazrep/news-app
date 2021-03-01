import {useRouter} from "next/router";
import styles from '../styles/home.module.css'


export const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.toolbar}>
      <div className={styles.toolbarElement} onClick={() => router.push('/')}><h3>Home</h3></div>
      <div className={styles.toolbarElement} onClick={() => router.push('/us/1')}><h3>USA</h3></div>
      <div className={styles.toolbarElement} onClick={() => router.push('/pol/1')}><h3>POL</h3></div>
      <div className={styles.toolbarElement} onClick={() => router.push('/crypto/1')}><h3>BTC</h3></div>
      <div className={styles.toolbarElement} onClick={() => router.push('/eom/1')}><h3>EOM</h3></div>
    </div>
  )
}