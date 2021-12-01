import { lazy, Suspense, useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom'

// Containers
import Header from './containers/Header'
// Components
import Loader from './components/Animation'
// Pages
import Home from './pages/Home'
// Lazy load Pages
// const Home           = lazy(() => import('./pages/Home'))
const Help           = lazy(() => import('./pages/Help'))
const Login          = lazy(() => import('./pages/Login'))
const Shops          = lazy(() => import('./pages/Shops'))
const Profile        = lazy(() => import('./pages/Profile'))
const Announce       = lazy(() => import('./pages/Announce'))
const Business       = lazy(() => import('./pages/Business'))
const Register       = lazy(() => import('./pages/Register'))
const ErrorPage      = lazy(() => import('./pages/Error'))
const Announcements  = lazy(() => import('./pages/Announcements'))
const SingleAnnounce = lazy(() => import('./pages/SingleAnnounce'))

function App() {
  const [token, setToken] = useState(window.localStorage.getItem('sessionToken'))

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div className="loader-animation">{<Loader/>}</div>}>
          {token ? (
            <>
              <Header token={token} setToken={setToken} />

              <Switch>
                {token && <Redirect from="/register/" to="/profile" />}
                {token && <Redirect from="/login/" to="/profile" />}
                <Route exact path="/" component={Home} />
                <Route path="/help" component={Help} />
                <Route path="/shops" component={Shops} />
                <Route path="/profile" component={Profile} />
                <Route path="/announce" component={Announce} />
                <Route path="/business" component={Business} />
                <Route path="/announcements" component={Announcements} />
                <Route path="/announcement/:announce_id" component={SingleAnnounce} />
                <Route path="*" component={ErrorPage} />
              </Switch>
            </>
          ) : (
            <>
              <Header token={token} setToken={setToken} />

              <Switch>
                <Redirect from="/profile/" to="/" />
                <Redirect from="/announce/" to="/" />
                <Route exact path="/" component={Home} />
                <Route path="/help" component={Help} />
                <Route path="/shops" component={Shops} />
                <Route path="/login" render={() => <Login setToken={setToken} />} />
                <Route path="/business" component={Business} />
                <Route path="/register" render={() => <Register setToken={setToken} />} />
                <Route path="/announcements" component={Announcements} />
                <Route path="/announcement/:announce_id" component={SingleAnnounce} />
                <Route path="*" component={ErrorPage} />
              </Switch>
            </>
          )}
        </Suspense>
      </Router>
    </div>
  )
}

export default App
