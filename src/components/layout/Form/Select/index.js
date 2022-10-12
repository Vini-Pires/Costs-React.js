import React from 'react'
import style from './style.module.css'

const Select = ({placeholder, name, options, handleOnChange, text}) => {
  return (
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option defaultChecked>Selecione uma categoria</option>
        <option value="">tecnologia</option>
      </select>
    </div>
  )
}

export default Select