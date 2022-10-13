import React from 'react'
import { useState, useEffect } from "react";
import style from './style.module.css'

const Message = ({type, message}) => {

  const [visible, setVisible] = useState(false)

  useEffect(()=>{
    if (!message) {
      setVisible(false)
      return
    } else {
      setVisible(true)
    }

    const timer = setTimeout(()=>{
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)

  }, [message])

  return (
    <>
     {visible && (
      <span className={`${style.message} ${style[type]}`}>{message}</span>
     )} 
      <span className={`${style.message} ${style[type]}`}>Projeto adicionado com sucesso</span>

    </>
  )
}

export default Message