import styles from './Catalogue.module.css'

const Catalogue = () => {
  return (
    <div className={styles.catalogue}>
        <div className={styles.filters}>
          <select name="" id="">
            <option value="" selected hidden>Фильтровать</option>
            <option value="">Избранное</option>
            <option value="">Недавно добавленное</option>
            <option value="">Подешевле</option>
            <option value="">Подороже</option>
          </select>
          <input type="text" placeholder='Поиск по товарам' />
          <div className={styles.mode}></div>
        </div>
        <div className={styles.stuff}>

        </div>
    </div>
  )
}

export default Catalogue