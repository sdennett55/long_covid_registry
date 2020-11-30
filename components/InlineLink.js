import styles from '../styles/InlineLink.module.css'

const InlineLink = ({ openInNewTab, href, children }) => {
  const newTabAttributes = openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a className={styles.InlineLink} href={href} {...newTabAttributes}>{children}</a>
  )
};

export default InlineLink;