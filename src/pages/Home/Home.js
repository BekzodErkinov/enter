// Containers
import AnnounceCategory from '../../containers/AnnounceCategory'
import AnnounceListSection from '../../containers/AnnounceListSection'
import RecCategoryBanner from '../../containers/RecCategoryBanner'

// SCSS
import styles from './Home.module.scss'

const Home = () => {
  return (
    <main className={styles.home}>
      <AnnounceCategory />
      <AnnounceListSection />
      <RecCategoryBanner />
    </main>
  )
}

export default Home
