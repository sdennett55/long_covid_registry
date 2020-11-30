import styles from '../styles/Form.module.css'

const Form = ({ children, onSubmit }) => {
  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      {children}
    </form>
  )
}

export default Form;