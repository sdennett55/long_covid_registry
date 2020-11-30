import styles from '../styles/FormSection.module.css'

const FormSection = ({ children, subtitle, title }) => {
  return (
    <div className={styles.FormSection}>
      <label style={{ display: 'block' }}>
        <span className={styles.FormSectionTitle}>
          {title}
          {subtitle && (<span className={styles.FormSectionSubtitle}>({subtitle})</span>)}
        </span>
        {children}
      </label>
    </div>
  )
}

export default FormSection;