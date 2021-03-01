import styles from '../styles/home.module.css'
import {Toolbar} from "../components/toolbar";

export default function Home() {
  return (
    <div >
        <Toolbar/>
      <div className={styles.main}>
        <h1>Next.js News App</h1>
        <h3>Your one stop shop with latest news articles</h3>
        <img src="https://www.thepropertyfinders.com/wp-content/uploads/property-detective.jpg" alt=""/>
      </div>
    </div>
  )
}
