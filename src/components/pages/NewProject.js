import React from 'react'
import ProjectForm from '../project/ProjectForm/index'
import style from  '../../assets/css/NewProject.module.css'

const NewProject = () => {
  return (
    <section className={style.new_project}>
      <div className={style.container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm btnText='Criar Projeto'/>
      </div>
    </section>
  )
}

export default NewProject