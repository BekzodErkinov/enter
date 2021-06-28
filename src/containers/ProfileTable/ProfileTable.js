// Data
import { profileTableData } from '../../assets/data'
// Components
import ProfileTableItem from '../../components/ProfileTableItem'
// SCSS
import styles from './ProfileTable.module.scss'

const ProfileTable = () => {
  return (
    <div className={styles.announceTableHolder}>
      {/* Table Head */}
      <div className={styles.tableHead}>
        <h3 className={styles.title}>Фото</h3>
        <h3 className={styles.title}>Название</h3>
        <h3 className={styles.title}>Цена</h3>
        <h3 className={styles.title}>Дата</h3>
        <h3 className={styles.title}>Действие</h3>
      </div>
    {/* Table Body */}
      <div className={styles.tableBody}>
        {profileTableData.map(item => (
          <ProfileTableItem
            key={item.id}
            img={item.img}
            title={item.title}
            cost={item.cost}
            data={item.data}
            views={item.views}
            tel={item.tel}
          />
        ))}
      </div>
    </div>
  )
}

export default ProfileTable
