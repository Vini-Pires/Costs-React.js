import React from 'react'
import style from './style.module.css'

const SubmitButton = ({text}) => {
  return (
    <div>
      <button type="submit" className={style.btn}>{text}</button>
    </div>
  )
}

export default SubmitButton