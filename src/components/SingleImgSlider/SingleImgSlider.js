import { useState, useEffect } from 'react'
import Slider from 'react-slick'

// Data
import { announcementsList } from '../../assets/data'

// SCSS
import styles from './SingleImgSlider.module.scss'

const SingleImgSlider = ({ announceId }) => {
  const [slider1, setSlider1] = useState(null)
  const [slider2, setSlider2] = useState(null)

  let _slider1 = [],
    _slider2 = []

  useEffect(() => {
    setSlider1(_slider1)
    setSlider2(_slider2)
  }, [_slider1, _slider2])

  // Slide (controllers) Settings
  const slider2Settings = {
    dots: false,
    speed: 500,
    infinite: true,
    vertical: true,
    slidesToShow: 5,
    swipeToSlide: false,
    slidesToScroll: 1,
    focusOnSelect: true,
  }
  // Slider (single) Settings
  const slider1Settings = {
    dots: false,
    speed: 600,
    infinite: true,
    slidesToShow: 1,
    swipeToSlide: false,
    slidesToScroll: 1,
    touchThreshold: 8,
  }

  // Single Announce (taking from 'announcementsList')
  let announce = null
  announcementsList.find(announcement => {
    if (+announceId === announcement.id)
      announce = announcement
  })

  return (
    <div className={styles.singleImgSliderHolder}>
      {/* Slider navigation */}
      <div className={styles.sliderControls}>
        <Slider
          asNavFor={slider1}
          ref={slider => { _slider2 = slider }}
          {...slider2Settings}
        >
          {announce.appearances.map((img, index) => (
            <div className={styles.sliderControl} key={index}>
              <img width="90" height="80" src={img} alt="Appearance"/>
            </div>
          ))}
        </Slider>
      </div>
      {/* Slider Single image */}
      <div className={styles.slideHolder}>
        <Slider
          asNavFor={slider2}
          ref={slider => { _slider1 = slider }}
          {...slider1Settings}
        >
          {announce.appearances.map((img, index) => (
            <div className={styles.slide} key={index}>
              <img width="440" height="440" src={img} alt="Appearance"/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SingleImgSlider
