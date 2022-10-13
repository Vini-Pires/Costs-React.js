import React from 'react'
import style from './style.module.css'

const Select = ({name, options, text, value, handleOnChange}) => {
  return (
    <div className={style.form_control}>
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name} onChange={handleOnChange} defaultValue={value || ''} >
        <option defaultValue={text}>{text}</option>
        {options.map((option)=>(
          <option value={option.id} key={option.id}>{option.name}</option>
        ))}
        
      </select>
    </div>
  )
}

export default Select