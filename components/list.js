import styles from './styles/list.module.scss';

export function List(props) {
  return (
    <>
      <b className={styles.title}>{props.label}:</b>
      <ul className={styles.list}>
        {props.children}
      </ul>
    </>
  )
}

export function ListItem(props) {
  return (
    <li className={styles.item}>
      <b className={styles.arrow}>-&gt;</b>&nbsp;
      <text className={styles.icon}>{props.icon}</text>&nbsp;
      <b className={styles.itemlabel}>{props.label}:</b>&nbsp;
      {props.children}
    </li>
  )
}
