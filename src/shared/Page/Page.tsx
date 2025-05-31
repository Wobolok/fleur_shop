import styles from './Page.module.css'

type PageProps = {
    children: React.ReactElement | null
}

const Page = ({children} : PageProps) => {
  return (
    <div className={styles.page}>
        {children}
    </div>
  )
}

export default Page