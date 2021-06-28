// SCSS
import styles from './Business.module.scss'

const Business = () => {
  return (
    <div className={styles.businessHolder}>
      <div className={styles.comingSoon}>
        <h1>Для бизнеса</h1>
        <img src="http://round2offroad.com/wp-content/uploads/2017/06/coming-soon-lg-rotate.png" alt="Coming Soon!" />
      </div>
    </div>
  )
}

export default Business
