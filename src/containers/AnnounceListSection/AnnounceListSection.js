import { useState } from 'react'

// Data
import { announcementsList } from '../../assets/data'
// Containers
import AnnounceTypeControl from '../../containers/AnnounceTypeControl'
import AnnouncementsList from '../../containers/AnnouncementsList'

// SCSS
import styles from './AnnounceListSection.module.scss'

const AnnounceListSection = () => {
  const [announceType, setAnnounceType] = useState('newAnnounce')

  return (
    <section className={styles.announceListSection}>
      <div className="container">
        {/* Announce type controller */}
        <AnnounceTypeControl announceType={announceType} setAnnounceType={setAnnounceType} />

        {/* Announce types */}
        {/* New announce */}
        {announceType === 'newAnnounce' &&
          <AnnouncementsList showCount='16' announcementsList={announcementsList} />}
        {/* Best offer */}
        {announceType === 'bestOffer' && <h1>Best Offer</h1>}
      </div>
    </section>
  )
}

export default AnnounceListSection
