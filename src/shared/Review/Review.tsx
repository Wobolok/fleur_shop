import styles from './Review.module.css'

const Review = () => {
  return (
    <div className={styles.review}>
        <div className={styles.title}>Заголовок отзыва</div>
        <div className={styles.date}>15.02.2025 15:40</div>
        <div className={styles.body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, qui in? Suscipit debitis quae delectus a, harum sed voluptatum dolore nihil perspiciatis dolorem eum molestias excepturi enim doloribus nostrum totam.</div>
        <div className={styles.controls}>
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg></button>
            <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash2-icon lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg></button>
        </div>
    </div>
  )
}

export default Review