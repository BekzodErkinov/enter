import { useState } from 'react'

// Data
import {
  recAnnounceTypeControlButtons,
  seenAnnouncements,
} from '../../assets/data'
// Containers
import AnnounceTypeControl from '../../containers/AnnounceTypeControl'
import AnnouncementsList from '../../containers/AnnouncementsList'

// SCSS
import styles from './RecAnnounceListSection.module.scss'

const RecAnnounceListSection = () => {
  const [recAnnounceType, setRecAnnounceType] = useState('viewed')

  return (
    <section className={styles.recAnnounceListSectionHolder}>
      <div className="container">
        {/* Recommended Announce type controllers */}
        <AnnounceTypeControl
          announceType={recAnnounceType}
          setAnnounceType={setRecAnnounceType}
          announceTypeControllers={recAnnounceTypeControlButtons}
        />

        {/* Recommended Announcements */}
        {/* Seen Announce */}
        {recAnnounceType === 'viewed' &&
          <AnnouncementsList showCount='4' announcementsList={seenAnnouncements} />}

        {/* Editor's Choice */}
        {recAnnounceType === 'editorsChoice' &&
          <AnnouncementsList showCount='2' announcementsList={seenAnnouncements} />}

        {/* Reduced Prices Type */}
        {recAnnounceType === 'reducedPrices' &&
          <AnnouncementsList showCount='3' announcementsList={seenAnnouncements} />}
      </div>
    </section>
  )
}

export default RecAnnounceListSection
