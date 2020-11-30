import Link from 'next/link';
import styles from '../styles/LinkButton.module.css'

const LinkButton = ({ color, href, children }) => {
  const className = color === 'black' ? styles.LinkButtonBlack : styles.LinkButton;
  if (href) {
    return (
      <Link href={href}><a className={className}>{children}</a></Link>
    )
  }

  return <button className={className}>{children}</button>
};

export default LinkButton;