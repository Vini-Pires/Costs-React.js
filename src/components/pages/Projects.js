import React from 'react'
import Message from '../layout/Message'
import { useLocation } from 'react-router-dom'
import style from  '../../assets/css/Projects.module.css'

const Projects = ()  => {

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  return (
    <section className={style.projects}>
      <div className={style.container}>
        <h1>Meus Projetos</h1>
        {message && <Message message={message} type='success'/>}
      </div>
    </section>
  )
}

export default Projects