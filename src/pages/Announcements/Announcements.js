// SCSS
import styles from './Announcements.module.scss'

const Announcements = () => {
  return (
    <div className={styles.announcementsHolder}>
      <div className={styles.comingSoon}>
        <h1>Объявления</h1>
        <img src="http://round2offroad.com/wp-content/uploads/2017/06/coming-soon-lg-rotate.png" alt="Coming Soon!" />
      </div>
    </div>
  )
}

export default Announcements
