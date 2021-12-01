// Images
import ComingSoon from '../../assets/images/coming-soon.png'

// SCSS
import styles from './Help.module.scss'

const Help = () => {
  return (
    <div className={styles.helpHolder}>
      <div className={styles.comingSoon}>
        <h1>Помощь</h1>
        <img width="600" src={ComingSoon} alt="Coming Soon!" />
      </div>
    </div>
  )
}

export default Help
