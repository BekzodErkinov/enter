// Containers
import ProfileTable from '../../containers/ProfileTable'

// Images
import ComingSoon from '../../assets/images/coming-soon.png'

// SCSS
import styles from './ProfileMain.module.scss'

const ProfileMain = ({ menu }) => {
  return (
    <div className={styles.ProfileMain}>
      {/* Announcement */}
      {menu === 'announcement' &&
        <section className={styles.announcement}>
          <div className="container">
            <ProfileTable />
          </div>
        </section>
      }

      {/* Message */}
      {menu === 'message' &&
        <section className="message">
          <div className={styles.profileComingSoon}>
            <h1>Сообщения</h1>
            <img width="600" src={ComingSoon} alt="Coming Soon!" />
          </div>
        </section>
      }

      {/* Payments and Invoice */}
      {menu === 'paymentsAndInvoice' &&
        <section className="paymentsAndInvoice">
          <div className={styles.profileComingSoon}>
            <h1>Платежи и счёт</h1>
            <img width="600" src={ComingSoon} alt="Coming Soon!" />
          </div>
        </section>
      }

      {/* Settings */}
      {menu === 'settings' &&
        <section className="settings">
          <div className={styles.profileComingSoon}>
            <h1>Настройки</h1>
            <img width="600" src={ComingSoon} alt="Coming Soon!" />
          </div>
        </section>
      }

      {/* My Business */}
      {menu === 'myBusiness' &&
        <section className="myBusiness">
          <div className={styles.profileComingSoon}>
            <h1>Мой бизнес</h1>
            <img width="600" src={ComingSoon} alt="Coming Soon!" />
          </div>
        </section>
      }
    </div>
  )
}

export default ProfileMain
