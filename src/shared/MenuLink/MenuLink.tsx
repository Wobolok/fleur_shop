import type { ReactElement } from 'react'
import styles from './MenuLink.module.css'
import { NavLink } from 'react-router'

type MenuLinkProps = {
    icon:ReactElement,
    title:string,
    to:string
}

const MenuLink = ({icon,title,to}: MenuLinkProps) => {
  return (
    <NavLink to={to} className={({isActive}) => (isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`)}>
        {icon}
        <div className={styles.tip}>{title}</div>
    </NavLink>
  )
}

export default MenuLink