// SCSS
import styles from './Shops.module.scss'

const Shops = () => {
  return (
    <div className={styles.shopsHolder}>
      <div className={styles.comingSoon}>
        <h1>Магазины</h1>
        <img src="http://round2offroad.com/wp-content/uploads/2017/06/coming-soon-lg-rotate.png" alt="Coming Soon!" />
      </div>
    </div>
  )
}

export default Shops
