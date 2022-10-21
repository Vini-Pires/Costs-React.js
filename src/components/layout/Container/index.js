import style from "./style.module.css"

const Container = props => {
  return (
    <div className={`${style.container} ${style[props.customClass]}`}>
      {props.children}
    </div>
  )
}

export default Container
