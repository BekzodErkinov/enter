import { useLocation } from 'react-router-dom'

// SCSS
import styles from './AnnounceTypeControl.module.scss'

const AnnounceTypeControl = ({ announceTypeControllers, announceType, setAnnounceType }) => {
  const location = useLocation()

  return (
    <div className={`${styles.announceTypeControlHolder} ${location.pathname === '/profile' && styles.profilePage}`}>
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
