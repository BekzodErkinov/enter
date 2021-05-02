import { Link } from 'react-router-dom'

// SCSS
import styles from './AnnounceCard.module.scss'

const AnnounceCard = ({ id, img, cost, date, title, currency }) => {
  return (
    <Link to={`/announcement/${id}`} className={styles.announceCardHolder} id={id}>
      <div className={styles.cardHead}>
        <img height="190" width="262" className={styles.cardImg} src={img} alt={title} />
      </div>
      <div className={styles.cardBody}>
        <h2 className={styles.title}>{title}</h2>
        <span className={styles.date}>{date}</span>
        <div className={styles.costWrap}>
          <span className={styles.cost}>{cost}</span>
          <span className={styles.currency}>{currency}</span>
        </div>
      </div>
    </Link>
  )
}

export default AnnounceCard
