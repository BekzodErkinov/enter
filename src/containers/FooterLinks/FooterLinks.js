import { useState } from 'react'
import { Link } from 'react-router-dom'

// Data
import { announcementsCategory } from '../../assets/data'

// SCSS
import styles from './FooterLinks.module.scss'

const FooterLinks = () => {
  const [open, setOpen] = useState(true)

  return (
    <div className={styles.footerLinksHolder}>
      {/* Links */}
      <div className={`${styles.linksList} ${open ? styles.hide : ''}`}>
        {announcementsCategory.map((links, linksIndex) => (
          <div className={styles.linksItem} key={linksIndex}>
            {/* Link to general announce category */}
            <Link
              to="#"
              className={`${styles.categoryTitle} categoryTitle-${linksIndex}`}
            >{links[0]}</Link>
            <div className={styles.links}>
              {links[1].map((link, linkIndex) => (
                // Link to specific announce category
                <Link className={styles.link} to="#" key={linkIndex}>{link}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Show/Hide buttons */}
      <div className={styles.showHideBtn}>
        {/* Show More Button */}
        <div
          className={styles.showBtnWrap}
          style={open ? {display: 'flex'} : {display: 'none'}}
        >
          <button
            className={styles.showMoreBtn}
            onClick={() => setOpen(!open)}
          >
            <span className={styles.title}>Показать еще</span>
            <span className={styles.icon}>
              <svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="1" width="11" height="6">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.818176 6.68188L0.818176 1.18188L10.8182 1.18188L10.8182 6.68188L0.818176 6.68188Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.8179 5.96916L1.30176 1.26863C1.19064 1.15297 1.01258 1.15297 0.90146 1.26863C0.790415 1.38418 0.790415 1.56961 0.90146 1.68517L5.61889 6.5952C5.72991 6.71078 5.90807 6.71078 6.01909 6.5952L10.7344 1.68517C10.7889 1.62851 10.8182 1.55214 10.8182 1.47803C10.8182 1.40389 10.791 1.32752 10.7344 1.27076C10.6234 1.15521 10.4452 1.15521 10.3342 1.27076L5.8179 5.96916Z" fill="black" stroke="#707E89"/>
                </g>
              </svg>
            </span>
          </button>
        </div>
        {/* Less Button */}
        <div
          className={styles.lessBtnWrap}
          style={open ? {display: 'none'} : {display: 'flex'}}
        >
          <button
            className={styles.lessBtn}
            onClick={() => setOpen(!open)}
          >
            <span className={styles.title}>Показывай меньше</span>
            <span className={styles.icon}><img src="https://img.icons8.com/ios-glyphs/15/66717A/chevron-up.png" alt="^"/></span>
          </button>
        </div>
      </div>

      {/* Lower Links */}
      <div className={styles.lowerLinks}>
        <Link to="#">Подать объявление</Link>
        <Link to="#">Объявления</Link>
        <Link to="#">Магазины</Link>
        <Link to="#">Помощь</Link>
        <Link to="#">Безопасность</Link>
        <Link to="#">Реклама на сайте</Link>
        <Link to="#">О компании</Link>
      </div>
    </div>
  )
}

export default FooterLinks
