import styles from './style.module.css'

const Container = (props) => {
  return (
    <main className={`${styles.container} ${styles[props.customClass]}`} >{props.children}</main>
  )
}

export default Container