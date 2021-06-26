import defaultAnnounceImg from '../../assets/images/defaultAnnounceImg.png'

// SCSS
import styles from './Profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.profile}>
      {/* Announcement */}
      {'announcement' &&
        <section className="announcement">
          <div className="container">
            <div className="announceTableHolder">
              <table>
                <thead>
                  <td>
                    <tr>Фото</tr>
                  </td>
                  <td>
                    <tr>Название</tr>
                  </td>
                  <td>
                    <tr>Цена</tr>
                  </td>
                  <td>
                    <tr>Дата</tr>
                  </td>
                  <td>
                    <tr>Действие</tr>
                  </td>
                </thead>
                <tbody>
                  <td>
                    <tr>
                      <div className={styles.announceHeader}>
                        <div className={styles.lead}>
                          <img src={defaultAnnounceImg} alt="Announce"/>
                          <h3>Срочно нужен программист yii2</h3>
                        </div>
                        <div className={styles.cost}>
                          <span>2 000 000</span>
                          <span>6 000 000 сум</span>
                        </div>
                        <div className={styles.data}>
                          <span># 345 002</span>
                          <span>С: 28 июнь</span>
                          <span>По: 28 июль</span>
                        </div>
                        <div className={styles.buttons}>
                          <button className={styles.riseBtn} type="button">Поднять</button>
                          <button className={styles.advertiseBtn} type="button">Рекламировать</button>
                          <button className={styles.options} type="button">
                            <svg width="17" height="5" viewBox="0 0 17 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="5" height="5">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.015625 0.204468H4.47702V4.68138H0.015625V0.204468Z" fill="white"/>
                              </mask>
                              <g mask="url(#mask0)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.47617 2.44379C4.47617 1.20919 3.47243 0.204468 2.23759 0.204468C1.00374 0.204468 0 1.20919 0 2.44379C0 3.67764 1.00374 4.68138 2.23759 4.68138C3.47243 4.68064 4.47617 3.67666 4.47617 2.44379ZM0.788159 2.44379C0.788159 1.64405 1.43884 0.993613 2.23759 0.993613C3.03733 0.993613 3.68801 1.64405 3.68801 2.44379C3.68801 3.24279 3.03733 3.89224 2.23759 3.89224C1.43884 3.89224 0.788159 3.24279 0.788159 2.44379Z" fill="black"/>
                              </g>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6205 2.44379C10.6205 1.20919 9.61672 0.204468 8.38213 0.204468C7.14827 0.204468 6.14453 1.20919 6.14453 2.44379C6.14453 3.67764 7.14827 4.68138 8.38213 4.68138C9.61672 4.68064 10.6205 3.67666 10.6205 2.44379ZM8.38213 3.89224C7.58313 3.89224 6.93269 3.24279 6.93269 2.44305C6.93269 1.64306 7.58313 0.992627 8.38213 0.992627C9.18186 0.992627 9.8323 1.64306 9.8323 2.44305C9.8323 3.24279 9.18186 3.89224 8.38213 3.89224Z" fill="black"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5257 0.204468C13.2908 0.204468 12.2871 1.20919 12.2871 2.44305C12.2871 3.67666 13.2908 4.68064 14.5257 4.68064C15.7595 4.68064 16.7633 3.67666 16.7633 2.44305C16.7633 1.20919 15.7595 0.204468 14.5257 0.204468ZM14.5257 3.89224C13.726 3.89224 13.0753 3.24279 13.0753 2.44305C13.0753 1.64306 13.726 0.992627 14.5257 0.992627C15.3244 0.992627 15.9751 1.64306 15.9751 2.44305C15.9751 3.24279 15.3244 3.89224 14.5257 3.89224Z" fill="black"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="announceFooter"></div>
                    </tr>
                  </td>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      }

      {/* Message */}
      {'message' &&
        <section className="message"></section>
      }

      {/* Payments and Invoice */}
      {'paymentsAndInvoice' &&
        <section className="paymentsAndInvoice"></section>
      }

      {/* Settings */}
      {'settings' &&
        <section className="settings"></section>
      }

      {/* My Business */}
      {'myBusiness' &&
        <section className="myBusiness"></section>
      }
    </div>
  )
}

export default Profile
