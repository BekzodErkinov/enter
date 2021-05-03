import { Link } from 'react-router-dom'

// Data
import { recCategoriesBanner } from '../../assets/data'
// Components
import SlickSlider from '../../components/SlickSlider'

// SCSS
import styles from './RecCategoryBanner.module.scss'

// Recommended Category Banner
const RecCategoryBanner = () => {
  // Slide Settings
  const settings = {
    dots: false,
    speed: 500,
    arrows: false,
    autoPlay: true,
    infinite: true,
    autoPlaySpeed: 2000,
    slidesToShow: 3,
    swipeToSlide: false,
    slidesToScroll: 1,
    touchThreshold: 100,
  }

  return (
    <div className={styles.recCategoryBannerHolder}>
      <div className={styles.slickHolder}>
        <SlickSlider
          settings={settings}
          className={styles.slickSlider}>
          {recCategoriesBanner.map((announce, index) => (
            <Link
              to="#"
              key={index}
              className={styles.banner}
            >
              <img width="360" height="238" src={announce.img} alt="Banner"/>
            </Link>
          ))}
        </SlickSlider>
      </div>
    </div>
  )
}

export default RecCategoryBanner
