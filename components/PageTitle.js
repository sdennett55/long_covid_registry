import styles from '../styles/PageTitle.module.css'

const PageTitle = ({children}) => {
  return (
    <h1 className={styles.PageTitle}>{children}</h1>
  )
}

export default PageTitle;