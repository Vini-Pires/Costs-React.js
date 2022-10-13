import styles from './style.module.css'

const Container = (props) => {
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`} >{props.children}</div>
  )
}

export default Container