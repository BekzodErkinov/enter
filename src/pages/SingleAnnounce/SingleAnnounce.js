// SCSS
import styles from './SingleAnnounce.module.scss'

const SingleAnnounce = ({ match }) => {
  return (
    <div className={styles.singleAnnounceHolder}>
      <h1>Single Announce🔖 {match.id}</h1>
    </div>
  )
}

export default SingleAnnounce
