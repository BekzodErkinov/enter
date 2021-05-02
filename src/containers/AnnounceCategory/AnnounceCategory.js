// Data
import { announceCategories } from '../../assets/data'
// Components
import SlickSlider from '../../components/SlickSlider'
import { PrevArrow, NextArrow } from '../../components/SlickSliderBtn'
import AnnounceCategoryBtn from '../../components/AnnounceCategoryBtn'
// Images
import slickPrevArrow from '../../assets/images/slickPrevArrow.png'
import slickNextArrow from '../../assets/images/slickNextArrow.png'

// SCSS
import styles from './AnnounceCategory.module.scss'

const AnnounceCategory = () => {
  // Slide Control buttons style
  // Arrow general styles
  const arrowStyle = {
    width: 34,
    height: 34,
    boxShadow: '1px 3px 6px rgba(0, 0, 0, 0.12)',
    background: '#fff',
    borderRadius: '50%',
    backgroundSize: '80%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
  // Specific styles
  const prevArrowStyle = {
    ...arrowStyle,
    zIndex: 1,
    backgroundImage: `url(${slickPrevArrow})`,
  }
  const nextArrowStyle = {
    ...arrowStyle,
    backgroundImage: `url(${slickNextArrow})`,
  }

  // Slide Settings
  const announceSettings = {
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 8,
    swipeToSlide: false,
    slidesToScroll: 8,
    prevArrow: <PrevArrow styles={prevArrowStyle} />,
    nextArrow: <NextArrow styles={nextArrowStyle} />,
    touchThreshold: 6,
  }

  return (
    <div className={styles.announceCategoryHolder}>
      <div className="container">
        <div className={styles.slickHolder}>
          <SlickSlider settings={announceSettings}>
            {announceCategories.map((item,index) => (
              <AnnounceCategoryBtn
                key={index}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </SlickSlider>
        </div>
      </div>
    </div>
  )
}

export default AnnounceCategory
