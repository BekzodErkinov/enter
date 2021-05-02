// SCSS
import styles from './Modal.module.scss'

const Modal = ({ open, handleModalClose, title, children }) => {
  return (
    <div
      tabIndex="-1"
      className={`${styles.modalHolder} ${open && 'show'}`}
    >
      <div className={styles.modalContent}>
        {children}
      </div>
    </div>
  )
}

export default Modal
