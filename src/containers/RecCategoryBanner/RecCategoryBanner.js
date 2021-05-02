// Data
import { recCategoriesBanner } from '../../assets/data'
// Components
import SlickSlider from '../../components/SlickSlider'

// SCSS
import styles from './RecCategoryBanner.module.scss'

// Recommended Category Banner
const RecCategoryBanner = () => {
    // Slide Control buttons style
  // Arrow general styles
  // const arrowStyle = {
  //   width: 34,
  //   height: 34,
  //   boxShadow: '1px 3px 6px rgba(0, 0, 0, 0.12)',
  //   background: '#fff',
  //   borderRadius: '50%',
  //   backgroundSize: '80%',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  // }
  // Specific styles
  // const prevArrowStyle = {
  //   ...arrowStyle,
  //   backgroundImage: `url(${slickPrevArrow})`,
  // }
  // const nextArrowStyle = {
  //   ...arrowStyle,
  //   backgroundImage: `url(${slickNextArrow})`,
  // }

  // Slide Settings
  const announceSettings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 8,
    swipeToSlide: false,
    slidesToScroll: 8,
    // prevArrow: <PrevArrow styles={prevArrowStyle} />,
    // nextArrow: <NextArrow styles={nextArrowStyle} />,
    touchThreshold: 6,
  }

  return (
    <div className={styles.recCategoryBannerHolder}>
      <div className={styles.slickHolder}>
        <SlickSlider settings={announceSettings}>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
        </SlickSlider>
      </div>
    </div>
  )
}

export default RecCategoryBanner
