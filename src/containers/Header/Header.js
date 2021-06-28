import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Select from 'react-select'

// Data
import {
  announceCategoryOptions,
  territoryOptions,
} from '../../assets/data'

// Images
import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avatar.png'

// SCSS
import styles from './Header.module.scss'

const Header = ({ token, setToken }) => {
  const location = useLocation()
  // Profile Dropdown Menu
  const [profileDropdown, setProfileDropdown] = useState(false)

  // Profile > Logout button
  const logoutButton = () => {
    setToken(window.localStorage.removeItem('sessionToken'))
    setProfileDropdown(!profileDropdown)
  }

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
    <header className={`${styles.siteHeader} ${location.pathname === '/profile' && styles.profilePage}`}>
      <div className="container">
        <div className={styles.navigation}>
          <Link to="/" className={styles.lead} title="kivi - домашняя страница бесплатных объявлений">
            <img width="67" height="67" src={logo} alt="kivi" />
            <h2>Продай, найди, купи все что пожелаешь…</h2>
          </Link>
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
            {token ? (
              <div className={styles.profileHolder}>
                <button
                  type="button"
                  onClick={() => setProfileDropdown(!profileDropdown)}
                  className={styles.profileBtn}
                >
                  <h3 className={styles.userName}>Бекзод</h3>
                  <div className={styles.userImg}>
                    <img width="41" height="41" src={avatar} alt="Avatar" />
                  </div>
                </button>
                <div className={styles.profileDropdownHolder}>
                  <div className={`${styles.profileMenu} ${profileDropdown && styles.show}`}>
                    <Link
                      to="/profile"
                      className={styles.profileLink}
                      onClick={() => setProfileDropdown(!profileDropdown)}
                    >Profile</Link>
                    <button
                      type="button"
                      className={styles.settingsBtn}
                      onClick={() => setProfileDropdown(!profileDropdown)}
                    >Settings</button>
                    <button
                      type="button"
                      className={styles.exitBtn}
                      onClick={() => logoutButton()}
                    >Logout</button>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.register}>
                <Link to="/login">Вход</Link>
                <Link to="/register">Регистрация</Link>
              </div>
            )}
          </div>
          {/* Hamburger Menu */}
        </div>

        {/* Not to show the Announcements page */}
        {location.pathname === '/announcements' ||
          <section className={styles.searchHolder}>
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
          </section>
        }
      </div>
      {/* Show only the Profile page */}
      {location.pathname === '/profile' &&
        <section className={styles.profileLower}>
          <div className={styles.userInfo}>
            <div className="container">
              <div className={styles.info}>
                <h3 className={styles.title}>Здравствуйте Зухриддин Темиров</h3>
                <div className={styles.payment}>
                  <span className={styles.balance}>Ваш счет: 2 3000 сум</span>
                  <button className={styles.payBtn} type="button">
                    <span className={styles.plusIcon}>+</span>
                    <span className={styles.txt}>Пополнить</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </header>
  )
}

export default Header
