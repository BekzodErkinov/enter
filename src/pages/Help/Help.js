// SCSS
import styles from './Help.module.scss'

const Help = () => {
  return (
    <div className={styles.helpHolder}>
      <div className={styles.comingSoon}>
        <h1>Помощь</h1>
        <img src="http://round2offroad.com/wp-content/uploads/2017/06/coming-soon-lg-rotate.png" alt="Coming Soon!" />
      </div>
    </div>
  )
}

export default Help
