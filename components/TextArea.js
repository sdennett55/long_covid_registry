import styles from '../styles/TextArea.module.css'

const TextArea = (props) => {
  return (
    <textarea className={styles.TextArea} {...props} />
  )
}

export default TextArea;