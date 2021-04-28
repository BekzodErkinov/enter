import { Link, useLocation } from 'react-router-dom'
import Select from 'react-select'

// Data
import { announceCategoryOptions, territoryOptions } from '../../assets/data/data'
// Images
import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.png'
// SCSS
import styles from './Header.module.scss'

const Header = () => {
  // const [token, setToken] = useState(window.localStorage.getItem('sessionToken'))
  const location = useLocation()

  // Select custom styles
  const customStyles = {
    control: () => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: 15,
      fontWeight: 500,
      padding: '5px 0 6px 14px',
      cursor: 'pointer',
      borderTopLeftRadius: 22,
      borderBottomLeftRadius: 22,
    }),
    option: (provided, state) => ({
      ...provided,
      padding: 16,
      borderBottom: '1px solid #adadad',
      color: state.isSelected ? '#fff' : '#111',
    }),
    indicatorSeparator: provided => ({
      ...provided,
      display: 'none',
    }),
  }

  return (
    <header className={styles.siteHeader}>
      <div className="container">
        <div className={styles.navigation}>
          <div className={styles.lead}>
            <Link to="/" title="kivi - домашняя страница бесплатных объявлений">
              <img width="67" height="67" src={logo} alt="kivi" />
            </Link>
            <h2>Продай, найди, купи все что пожелаешь…</h2>
          </div>
          <div className={styles.navLinksHolder}>
            <nav className={styles.navLinks}>
              <Link to="/announcements">Объявления</Link>
              <Link to="/shops">Магазины</Link>
              <Link to="/business">Для бизнеса</Link>
              <Link to="/help">Помощь</Link>
            </nav>
            <div className={styles.siteLanguage}>
              <button type="button" disabled>Рус</button>
              <button type="button">O’z</button>
            </div>
            {true ? (
              <button type="button" className={styles.profile}>
                <h3 className={styles.userName}>Бекзод</h3>
                <div className={styles.userImg}>
                  <img width="41" height="41" src={avatar} alt="Avatar" />
                </div>
              </button>
            ) : (
              <div className={styles.register}>
                <button type="button">Вход</button>
                <button type="button">Регистрация</button>
              </div>
            )}
          </div>
          {/* Hamburger Menu */}
        </div>
        {location.pathname === '/announcements' ||
          <div className={styles.searchHolder}>
            <form action="GET" className={styles.searchForm}>
              <div className={styles.inputWrapper}>
                <Select
                  styles={customStyles}
                  options={announceCategoryOptions}
                  className={styles.categorySelect}
                  defaultValue={announceCategoryOptions[0]}
                />
                <label className={styles.searchLabel}>
                  <input type="text" className={styles.searchInput} placeholder="Что будем искать ?" required />
                </label>
                <Select
                  styles={customStyles}
                  options={territoryOptions}
                  className={styles.territorySelect}
                  defaultValue={territoryOptions[0]}
                />
                <button type="submit" className={styles.searchBtn}>Найти</button>
              </div>
            </form>
            <Link to="/announce" className={styles.addAnnounceLink}>
              <span className={styles.plusIcon}>+</span>
              <span className={styles.txt}>Добавить обьявления</span>
            </Link>
          </div>
        }
      </div>
    </header>
  )
}

export default Header
