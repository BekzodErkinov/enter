// SCSS
import styles from './ProfileTableItem.module.scss'

const ProfileTableItem = ({ img, title, cost, data, views, tel }) => {

  return (
    <div className={styles.tableItem}>
      {/* Table Lead */}
      <div className={styles.tableLead}>
        {/* Img */}
        <div className={styles.img}>
          <img src={img} alt="Announce"/>
        </div>
        {/* Title */}
        <h4 className={styles.title}>{title}</h4>
        {/* Cost */}
        <div className={styles.cost}>
          {cost.map((cost, i) => <span key={i}>{cost} сум</span>)}
        </div>
        {/* Data */}
        <div className={styles.data}>
          {data.map((data, i) => <span key={i}>{data}</span>)}
        </div>
        {/* Buttons */}
        <div className={styles.buttons}>
          <button className={styles.riseBtn} type="button">
            <img src="https://img.icons8.com/ios-glyphs/35/41D481/circled-up-2.png" alt="Up arrow"/>
            <span className="title">Поднять</span>
          </button>
          <button className={styles.advertiseBtn} type="button">
            <img src="https://img.icons8.com/ios-glyphs/35/304FFF/circled-up-2.png" alt="Up arrow"/>
            <span className="title">Рекламировать</span>
          </button>
          <button className={styles.options} type="button">
            <svg width="17" height="5" viewBox="0 0 17 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="5" height="5">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.015625 0.204468H4.47702V4.68138H0.015625V0.204468Z" fill="white"/>
              </mask>
              <g mask="url(#mask0)">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.47617 2.44379C4.47617 1.20919 3.47243 0.204468 2.23759 0.204468C1.00374 0.204468 0 1.20919 0 2.44379C0 3.67764 1.00374 4.68138 2.23759 4.68138C3.47243 4.68064 4.47617 3.67666 4.47617 2.44379ZM0.788159 2.44379C0.788159 1.64405 1.43884 0.993613 2.23759 0.993613C3.03733 0.993613 3.68801 1.64405 3.68801 2.44379C3.68801 3.24279 3.03733 3.89224 2.23759 3.89224C1.43884 3.89224 0.788159 3.24279 0.788159 2.44379Z" fill="black"/>
              </g>
              <path fillRule="evenodd" clipRule="evenodd" d="M10.6205 2.44379C10.6205 1.20919 9.61672 0.204468 8.38213 0.204468C7.14827 0.204468 6.14453 1.20919 6.14453 2.44379C6.14453 3.67764 7.14827 4.68138 8.38213 4.68138C9.61672 4.68064 10.6205 3.67666 10.6205 2.44379ZM8.38213 3.89224C7.58313 3.89224 6.93269 3.24279 6.93269 2.44305C6.93269 1.64306 7.58313 0.992627 8.38213 0.992627C9.18186 0.992627 9.8323 1.64306 9.8323 2.44305C9.8323 3.24279 9.18186 3.89224 8.38213 3.89224Z" fill="black"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.5257 0.204468C13.2908 0.204468 12.2871 1.20919 12.2871 2.44305C12.2871 3.67666 13.2908 4.68064 14.5257 4.68064C15.7595 4.68064 16.7633 3.67666 16.7633 2.44305C16.7633 1.20919 15.7595 0.204468 14.5257 0.204468ZM14.5257 3.89224C13.726 3.89224 13.0753 3.24279 13.0753 2.44305C13.0753 1.64306 13.726 0.992627 14.5257 0.992627C15.3244 0.992627 15.9751 1.64306 15.9751 2.44305C15.9751 3.24279 15.3244 3.89224 14.5257 3.89224Z" fill="black"/>
            </svg>
          </button>
        </div>
      </div>
      {/* Table Lower */}
      <div className={styles.tableLower}>
        <button className={styles.announceFooterBtn} type="button">Статистика</button>
        <span className={styles.announceFooterItem}>Просмотры: {views}</span>
        <span className={styles.announceFooterItem}>Тел.: {tel}</span>
        <span className={styles.announceFooterItem}>В Избранном: 0</span>
      </div>
    </div>
  )
}

export default ProfileTableItem
