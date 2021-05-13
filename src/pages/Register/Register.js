import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Services
import request from '../../services/http'
// Containers
import Footer from '../../containers/Footer'

// SCSS
import styles from './Register.module.scss'

const Register = ({ setToken }) => {
  const emailInputRef = useRef(null)
  const passInputRef = useRef(null)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    emailInputRef.current.value = 'eve.holt@reqres.in'
    passInputRef.current.value = 'pistol'
  }, [])

  const handleSubmit = e => {
    e.preventDefault()

    request.post('/register', {
      email: emailInputRef.current.value,
      password: passInputRef.current.value,
    })
    .then(res => {
      window.localStorage.setItem('sessionToken', res.data.token)
      setToken(res.data.token)
    })
    .catch(err => {
      alert(err)
      console.error(err)
      setHasError(true)
    })
  }

  return (
    <div className={styles.registerHolder}>
      <div className="container">
        <div className={styles.register}>
          {/* Left Side */}
          <div className={styles.leftSide}>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
              <div className={styles.lead}>
                <h3 className={styles.title}>Бесплатная регистрация</h3>
                <h2 className={styles.info}>
                  (<a href="https://reqres.in" target="_blank">ReqRes.in</a> API)
                </h2>
              </div>
              <input className={`${styles.registerInput} ${styles.emailInput}`} ref={emailInputRef} type="text" placeholder="Электронной почты" required/>
              <input className={`${styles.registerInput} ${styles.passInput}`} ref={passInputRef} type="password" placeholder="Пароль" required/>
              <button className={styles.registerSubmitBtn} type="submit">Далее</button>
              {hasError &&
                <h2 className={styles.alert}>
                  Электронная почта или пароль недействительны!
                </h2>
              }{/* Test mode */}
            </form>
            <div className={styles.signIn}>
              <span className={styles.orStyle}>или</span>
              <Link className={styles.signInLink} to="/login">Войдите в систему, если у вас уже есть аккаунт kivi.uz</Link>
            </div>
          </div>
          {/* Right Side */}
          <div className={styles.rightSide}>
            <div className={styles.appeal}>
              <h2 className={styles.brandName}>kivi</h2>
              <p className={styles.message}>Откройте для себя целую плошадку для продаже</p>
              <button className={styles.appealBtn}>Как это делать?</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Register
