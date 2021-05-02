// SCSS
import styles from './AnnounceCategoryBtn.module.scss'

const AnnounceCategoryBtn = ({ title, icon }) => {
  return (
    <button
      type="button" className={styles.announceCategoryBtnHolder}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{title}</span>
    </button>
  )
}

export default AnnounceCategoryBtn
