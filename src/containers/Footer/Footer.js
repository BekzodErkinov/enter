import { Link, useLocation } from 'react-router-dom'

// Containers
import FooterLinks from '../FooterLinks'

// Images
import logo from '../../assets/images/logo2.png'
import appStore from '../../assets/images/buttonAppStore.png'
import googlePlay from '../../assets/images/buttonAndroid.png'

// SCSS
import styles from './Footer.module.scss'

const Footer = () => {
  const location = useLocation()

  return (
    <div className={styles.siteFooter}>
      <div className="container">
        <div className={styles.footerHolder}>
          <Link to="/" className={styles.lead} title="kivi - домашняя страница бесплатных объявлений">
            <img width="67" height="67"src={logo} alt="kivi" />
            <h3>Продай, найди, купи все что ты пожелаешь</h3>
          </Link>
          <p className={styles.info}>Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт обяления</p>
          <div className={styles.links}>
            <a href="#" target="_blank">
              <img width="177" height="55" src={appStore} alt="Apple Store"/>
            </a>
            <a href="#" target="_blank">
              <img width="177" height="55" src={googlePlay} alt="Google Play"/>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      {location.pathname === '/register' ||
        location.pathname === '/profile' ||
        location.pathname === '/announce' ||
          <FooterLinks /> }
    </div>
  )
}

export default Footer
