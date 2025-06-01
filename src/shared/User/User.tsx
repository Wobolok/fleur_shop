import styles from './User.module.css'

const User = () => {
  return (
    <div className={styles.user}>
        <div className={styles.photo}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
            <button>Редактировать</button>
        </div>
        <div className={styles.info}>
            <div className={styles.name}>Username</div>
            <div className={styles.email}>example@gmail.com</div>
        </div>
    </div>
  )
}

export default User