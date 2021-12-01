// Images
import ComingSoon from '../../assets/images/coming-soon.png'

// SCSS
import styles from './Business.module.scss'

const Business = () => {
  return (
    <div className={styles.businessHolder}>
      <div className={styles.comingSoon}>
        <h1>Для бизнеса</h1>
        <img width="600" src={ComingSoon} alt="Coming Soon!" />
      </div>
    </div>
  )
}

export default Business
