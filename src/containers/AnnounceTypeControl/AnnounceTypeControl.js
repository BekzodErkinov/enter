// SCSS
import styles from './AnnounceTypeControl.module.scss'

const AnnounceTypeControl = ({ announceTypeControllers, announceType, setAnnounceType }) => {
  return (
    <div className={styles.announceTypeControlHolder}>
      {announceTypeControllers.map((btn, i) => (
        <button
          key={i}
          type="button"
          className={`${styles.announceTypeBtn} ${announceType === btn.value ? styles.active : ''}`}
          onClick={() => setAnnounceType(btn.value)}
        >
          {btn.title}
        </button>
      ))}
    </div>
  )
}

export default AnnounceTypeControl
