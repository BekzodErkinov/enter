import { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// Containers
import Header from './containers/Header'
// Components
import Loader from './components/Animation'
// Lazy load Pages
const Home          = lazy(() => import('./pages/Home'))
const Help          = lazy(() => import('./pages/Help'))
const Shops         = lazy(() => import('./pages/Shops'))
const Profile       = lazy(() => import('./pages/Profile'))
const Announce      = lazy(() => import('./pages/Announce'))
const Business      = lazy(() => import('./pages/Business'))
const Register      = lazy(() => import('./pages/Register'))
const ErrorPage     = lazy(() => import('./pages/Error'))
const Announcements = lazy(() => import('./pages/Announcements'))

function App() {
  // const [token, setToken] = useState(window.localStorage.getItem('sessionToken'))

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div className="center">{<Loader/>}</div>}>
          {true ? (
            <>
              <Header />

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/help" component={Help} />
                <Route path="/shops" component={Shops} />
                <Route path="/profile" component={Profile} />
                <Route path="/register" component={Register} />
                <Route path="/announce" component={Announce} />
                <Route path="/business" component={Business} />
                <Route path="/announcements" component={Announcements} />
                <Route path="*" component={ErrorPage} />
              </Switch>
            </>
          ) : (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/help" component={Help} />
              <Route path="/shops" component={Shops} />
              <Route path="/business" component={Business} />
              <Route path="/register" component={Register} />
              <Route path="/announcements" component={Announcements} />
              <Route path="*" component={ErrorPage} />
            </Switch>
          )}
        </Suspense>
      </Router>
    </div>
  )
}

export default App
