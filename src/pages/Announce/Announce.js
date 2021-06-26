// Containers
import AnnounceCategory from '../../containers/AnnounceCategory'

// SCSS
import styles from './Announce.module.scss'

const Announce = () => {
  return (
    <div className={styles.announceHolder}>
      <header className={styles.header}>
        <div className={styles.lead}>
          <h2 className={styles.title}>Добавить обьявления бесплатно</h2>
          <h3 className={styles.subtitle}>Для добавления вашего обьявлении вы должны выбрать категорию</h3>
        </div>
        <AnnounceCategory />
      </header>

      <main className={styles.main}></main>
    </div>
  )
}

export default Announce
