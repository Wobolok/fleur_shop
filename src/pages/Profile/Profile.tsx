import styles from './Profile.module.css'
import User from '../../shared/User/User'

const Profile = () => {
  return (
    <div className={styles.profile}>
        <User />
        <div className={styles.related}>
          <div className={styles.history}>
            <div className={styles.header}>История покупок<button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg></button></div>
          </div>
          <div className={styles.reviews}>
            <div className={styles.header}>Мои отзывы<button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg></button></div>
          </div>
        </div>
    </div>
  )
}

export default Profile