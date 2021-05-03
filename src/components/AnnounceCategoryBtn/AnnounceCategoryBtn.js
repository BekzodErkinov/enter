// SCSS
import styles from './AnnounceCategoryBtn.module.scss'

const AnnounceCategoryBtn = ({ icon, title, id }) => {
  return (
    <button
      type="button"
      className={`${styles.announceCategoryBtnHolder} announceCategoryBtn announceCategoryBtn-${id}`}
    >
      <span className={`${styles.icon} icon`}>{icon}</span>
      <span className={styles.title}>{title}</span>
    </button>
  )
}

export default AnnounceCategoryBtn
