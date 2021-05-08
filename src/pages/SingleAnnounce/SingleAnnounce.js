import { useState } from 'react'

// Data
import {
  announcementsList,
  singleAnnouncements,
  singleAnnouncements2,
  singleAnnounceTypeControlButtons,
} from '../../assets/data'
// Components
import SingleImgSlider from '../../components/SingleImgSlider'
import AnnounceCard from '../../components/AnnounceCard'
import SlickSlider from '../../components/SlickSlider'
import { PrevArrow, NextArrow } from '../../components/SlickSliderBtn'
// import AnnounceCategoryBtn from '../../components/AnnounceCategoryBtn'
// Containers
import AnnounceTypeControl from '../../containers/AnnounceTypeControl'
import Footer from '../../containers/Footer'
// Images
import slickPrevArrow from '../../assets/images/slickPrevArrow.png'
import slickNextArrow from '../../assets/images/slickNextArrow.png'

// SCSS
import styles from './SingleAnnounce.module.scss'

const SingleAnnounce = ({ match }) => {
  const [firstPhoneNum, setFirstPhoneNum] = useState(false)
  const [secondPhoneNum, setSecondPhoneNum] = useState(false)
  // Similar Announce
  const [singleAnnounceType, setSingleAnnounceType] = useState('similarAnnounce')

  // Slide Control buttons style
  // Arrow general styles
  const arrowStyle = {
    position: 'absolute',
    top: 116,
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
    infinite: true,
    slidesToShow: 4,
    swipeToSlide: false,
    slidesToScroll: 1,
    prevArrow: <PrevArrow styles={prevArrowStyle} />,
    nextArrow: <NextArrow styles={nextArrowStyle} />,
    touchThreshold: 6,
  }

  // Single Announce (taking from 'announcementsList')
  let announce = null
  announcementsList.find(announcement => {
    if (+match.params.announce_id === announcement.id)
      announce = announcement
  })

  return (
    <div className={styles.singleAnnounceHolder}>
      <div className="container">
        {/* Breadcrumbs */}
        <div className={styles.breadcrumbs}>
          <a className={styles.breadcrumb} href="#">Объявления</a>
          <span className={styles.slash}>/</span>
          <a className={styles.breadcrumb} href="#">Ташкент Недвижимость</a>
          <span className={styles.slash}>/</span>
          <a className={styles.breadcrumb} href="#">Ташкент Квартиры</a>
          <span className={styles.slash}>/</span>
          <a className={styles.breadcrumb} href="#">Ташкент Продажа</a>
          <span className={styles.slash}>/</span>
          <span className={styles.breadcrumb}>Новостройки Ташкент</span>
        </div>

        {/* SingleAnnounce */}
        <article className={styles.aboutAnnounce}>
          <h1 className={styles.announceTitle}>{announce.title}</h1>
          <main className={styles.announceContent}>
            {/* LEFT SECTION */}
            <section className={styles.leftSide}>
              <SingleImgSlider announceId={match.params.announce_id} />
            </section>
            {/* RIGHT SECTION */}
            <section className={styles.rightSide}>
              {/* Lead */}
              <div className={styles.lead}>
                <h4>Артикул: 4418970</h4>
                <h4>обновлено: 28.05.21 добавлено: 28.05.21</h4>
              </div>
              {/* Cost */}
              <h2 className={styles.cost}>{announce.cost}</h2>
              {/* Address */}
              <address className={styles.address}>
                <a href="#" target="_blank">Ташкент, Ташкентская область, Юнусабадский район</a>
              </address>
              {/* Phone Number */}
              <div className={styles.phoneNumWrap}>
                {/* First phone number */}
                <div className={styles.firstPhoneNumWrap}>
                  <span className={styles.firstPhoneNum}>
                    99891 166 {firstPhoneNum ?
                      '06 16' :
                      <span className={styles.hideStyle}>****</span>}
                  </span>
                  <button
                    type="button"
                    className={styles.showHideBtn}
                    onClick={() => setFirstPhoneNum(!firstPhoneNum)}
                  >{firstPhoneNum ? 'Скрывать' : 'Показать полностью'}</button>
                </div>
                {/* Second phone number */}
                <div className={styles.secondPhoneNumWrap}>
                  <span className={styles.secondPhoneNum}>
                    99891 166 {secondPhoneNum ?
                    '06 66' :
                    <span className={styles.hideStyle}>****</span>}
                  </span>
                  <button
                    type="button"
                    className={styles.showHideBtn}
                    onClick={() => setSecondPhoneNum(!secondPhoneNum)}
                  >{secondPhoneNum ? 'Скрывать' : 'Показать полностью'}</button>
                </div>
              </div>
              {/* Announcer */}
              <h4 className={styles.announcer}>
                <span className={styles.title}>Автор обьявлении:</span>
                <a className={styles.link} href="#">Зухриддин Темиров</a>
              </h4>
              {/* Buttons */}
              <div className={styles.btnWrap}>
                <button type="button">Написать автору</button>
                <button type="button">Предложить свою цену</button>
              </div>
              {/* Table */}
              <div className={styles.table}>
                <div className={styles.item}>
                  <h4 className={styles.title}>Количество комнат:</h4>
                  <span className={styles.value}>6</span>
                </div>
                <div className={styles.item}>
                  <h4 className={styles.title}>Общая площадь:</h4>
                  <span className={styles.value}>40 м<sup>2</sup></span>
                </div>
                <div className={styles.item}>
                  <h4 className={styles.title}>Этаж:</h4>
                  <span className={styles.value}>32</span>
                </div>
                <div className={styles.item}>
                  <h4 className={styles.title}>Этажность дома:</h4>
                  <span className={styles.value}>8</span>
                </div>
                <div className={styles.item}>
                  <h4 className={styles.title}>Состояние квартиры:</h4>
                  <span className={styles.value}>Первая сдача</span>
                </div>
                <div className={styles.item}>
                  <h4 className={styles.title}>Этаж:</h4>
                  <span className={styles.value}>32</span>
                </div>
                <div className={styles.item}>
                  <h4 className={styles.title}>Планировка</h4>
                  <a href="#" className={styles.link}>Раздельная</a>
                </div>
                <div className={styles.item}>
                  <h4 className={styles.title}>Год постройки/сдачи</h4>
                  <a href="#" className={styles.link}>Сдача в 2020</a>
                </div>
                <div className={styles.item}>
                  <h4 className={styles.title}>Ремонт</h4>
                  <span className={styles.value}>Авторский проект</span>
                </div>
                <div className={styles.item}>
                  <h4 className={styles.title}>Санузел</h4>
                  <a href="#" className={styles.link}>2 санузла и более</a>
                </div>
                <div className={styles.item}>
                  <h4 className={styles.title}>Меблирована</h4>
                  <a href="#" className={styles.link}>Да</a>
                </div>
                <div className={styles.item}>
                  <h4 className={styles.title}>Высота потолков:</h4>
                  <span className={styles.value}>4 м</span>
                </div>
              </div>
              <div className={styles.tableAddress}>
                <h4 className={styles.title}>Рядом есть</h4>
                <a href="#" className={styles.link}>Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе</a>
              </div>
              {/* Description */}
              <blockquote className={styles.description}>
                <p className={styles.txt}>Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый.</p>
                <p className={styles.txt}>Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.</p>
              </blockquote>
              {/* About */}
              <div className={styles.about}>
                <h4 className={styles.title}>Просмотры: <span>10958</span></h4>
                <button className={styles.btn} type="button">Пожаловатся</button>
              </div>
            </section>
          </main>
        </article>

        {/* Similar Announcements */}
        <div className={styles.announceSliderHolder}>
          {/* Similar Announcements */}
          {/* Recommended Announce type controllers */}
          <AnnounceTypeControl
            announceType={singleAnnounceType}
            setAnnounceType={setSingleAnnounceType}
            announceTypeControllers={singleAnnounceTypeControlButtons}
          />

          {/* Announcements Slick Carousel */}
          {/* Similar Announcements */}
          {singleAnnounceType === 'similarAnnounce' &&
            <SlickSlider settings={announceSettings}>
              {singleAnnouncements.map(announce => (
                <AnnounceCard
                  id={announce.id}
                  key={announce.id}
                  img={announce.img}
                  cost={announce.cost}
                  date={announce.date}
                  title={announce.title}
                />
              ))}
            </SlickSlider>
          }
          {/* Author Announcements */}
          {singleAnnounceType === 'authorAnnounce' &&
            <SlickSlider settings={announceSettings}>
              {singleAnnouncements2.map(announce => (
                <AnnounceCard
                  id={announce.id}
                  key={announce.id}
                  img={announce.img}
                  cost={announce.cost}
                  date={announce.date}
                  title={announce.title}
                />
              ))}
            </SlickSlider>
          }
        </div>
      </div>

      {/* Site Footer */}
      <Footer />
    </div>
  )
}

export default SingleAnnounce
