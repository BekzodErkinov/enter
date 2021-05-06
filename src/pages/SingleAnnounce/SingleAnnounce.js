// Data
import { announcementsList } from '../../assets/data'

// SCSS
import styles from './SingleAnnounce.module.scss'

const SingleAnnounce = ({ match }) => {
  let announce = null
  announcementsList.find(announcement => {
    if (match.params.announce_id == announcement.id)
      announce = announcement
  })

  return (
    <div className={styles.singleAnnounceHolder}>
      <div className="container">
        <p><a href="#">Объявления</a> / <a href="#">Ташкент Недвижимость</a> / <a href="#">Ташкент Квартиры</a> / <a href="#">Ташкент Продажа</a> / Новостройки Ташкент</p>

        {announce.id}
      </div>
    </div>
  )
}

export default SingleAnnounce
