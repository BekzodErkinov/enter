// Images
import ComingSoon from '../../assets/images/coming-soon.png'

// SCSS
import styles from './Shops.module.scss'

const Shops = () => {
  return (
    <div className={styles.shopsHolder}>
      <div className={styles.comingSoon}>
        <h1>Магазины</h1>
        <img width="600" src={ComingSoon} alt="Coming Soon!" />
      </div>
    </div>
  )
}

export default Shops
