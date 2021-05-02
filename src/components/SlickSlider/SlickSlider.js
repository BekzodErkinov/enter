import Slider from 'react-slick'

// SCSS
import styles from './SlickSlider.module.scss'

const SlickSlider = ({ settings, children }) => {
  return (
    <Slider {...settings} className={styles.slickSlider}>
      {children}
    </Slider>
  )
}

export default SlickSlider
