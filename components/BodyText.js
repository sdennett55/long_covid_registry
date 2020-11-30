import styles from '../styles/BodyText.module.css'

const BodyText = ({ children, maxWidth }) => {
  return (
    <p className={styles.BodyText} style={maxWidth ? { maxWidth } : null}>{children}</p>
  )
}

export default BodyText;