// Containers
import AnnounceCategory from '../../containers/AnnounceCategory'
import AnnounceListSection from '../../containers/AnnounceListSection'
import RecCategoryBanner from '../../containers/RecCategoryBanner'
import RecAnnounceListSection from '../../containers/RecAnnounceListSection'
import Footer from '../../containers/Footer'

// SCSS
import styles from './Home.module.scss'

const Home = () => {
  return (
    <main className={styles.home}>
      <AnnounceCategory />
      <AnnounceListSection />
      <RecCategoryBanner />
      <RecAnnounceListSection />
      <Footer />
    </main>
  )
}

export default Home
