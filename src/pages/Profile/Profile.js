import { useState } from 'react'

// Data
import { profileMenuBtn } from '../../assets/data'

// Containers
import ProfileMain from '../../containers/ProfileMain'
import AnnounceTypeControl from '../../containers/AnnounceTypeControl'
import Footer from '../../containers/Footer'

// SCSS
import styles from './Profile.module.scss'

const Profile = () => {
  // Profile page Menu Controller Buttons
  const [menu, setMenu] = useState('announcement')

  return (
    <div className={styles.profile}>
      <div className={styles.menuController}>
        <div className="container">
          <AnnounceTypeControl
            announceType={menu}
            setAnnounceType={setMenu}
            announceTypeControllers={profileMenuBtn}
          />
        </div>
      </div>

      <ProfileMain menu={menu} />
      <Footer />
    </div>
  )
}

export default Profile
