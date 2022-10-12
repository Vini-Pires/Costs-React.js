import React from 'react'
import style from './style.module.css'

const Input = ({type, placeholder, name, value, handleOnChange, text}) => {
  return (
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <input type={type} placeholder={placeholder} name={name} value={value} onChange={handleOnChange}/>
    </div>
  )
}

export default Input