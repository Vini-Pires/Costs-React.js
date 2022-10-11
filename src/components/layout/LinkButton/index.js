import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'

const LinkButton = ({toWhere , text}) => {
  return (
    <Link to={toWhere} className={style.btn_simple}>{text}</Link>
  )
}

export default LinkButton