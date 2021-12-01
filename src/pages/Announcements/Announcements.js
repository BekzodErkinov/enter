// Images
import ComingSoon from '../../assets/images/coming-soon.png'

// SCSS
import styles from './Announcements.module.scss'

const Announcements = () => {
  return (
    <div className={styles.announcementsHolder}>
      <div className={styles.comingSoon}>
        <h1>Объявления</h1>
        <img width="600" src={ComingSoon} alt="Coming Soon!" />
      </div>
    </div>
  )
}

export default Announcements
