import { useState } from 'react'

// Components
import AnnounceCard from '../../components/AnnounceCard'

// SCSS
import styles from './AnnouncementsList.module.scss'

const AnnouncementsList = ({ announcementsList, showCount = 16 }) => {
  const [showMore, setShowMore] = useState(+showCount)
  const selectedAnnouncements = []

  /*  ❗️ Not yet completed ❗️  - Test mode */
  announcementsList.map((announce, index) => (
    index < showMore && selectedAnnouncements.push(announce)
  ))
  function showMoreAnnounce (arr, count) {
    setShowMore(+count + +count)
    arr.map((announce, index) => (
      index < showMore && selectedAnnouncements.push(announce)
    ))
  }
  /*  ❗️ Not yet completed ❗️  - Test mode */

  return (
    <div className={styles.announcementsListHolder}>
      {/* Announcements List */}
      <div className={styles.announceList}>
        {selectedAnnouncements.map(announce => (
          <AnnounceCard
            id={announce.id}
            key={announce.id}
            img={announce.img}
            cost={announce.cost}
            date={announce.date}
            title={announce.title}
          />
          ))}
      </div>

      {/* Show More Button */}
      <div className={styles.showMore}>
        <button
          type="button"
          className={styles.showMoreBtn}
          onClick={() => showMoreAnnounce(announcementsList, showCount)}>
          <span className={styles.title}>Покозать еще</span>
          <span className={styles.icon}>
            <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="1" width="11" height="6">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.818176 6.68182L0.818176 1.18182L10.8182 1.18182L10.8182 6.68182L0.818176 6.68182Z" fill="white"/>
              </mask>
              <g mask="url(#mask0)">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.8179 5.9691L1.30176 1.26857C1.19064 1.15291 1.01258 1.15291 0.90146 1.26857C0.790415 1.38412 0.790415 1.56955 0.90146 1.6851L5.61889 6.59514C5.72991 6.71072 5.90807 6.71072 6.01909 6.59514L10.7344 1.6851C10.7889 1.62845 10.8182 1.55208 10.8182 1.47797C10.8182 1.40383 10.791 1.32746 10.7344 1.2707C10.6234 1.15514 10.4452 1.15514 10.3342 1.2707L5.8179 5.9691Z" fill="black" />
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}

export default AnnouncementsList
