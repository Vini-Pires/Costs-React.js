import React from 'react'
import LinkButton from '../layout/LinkButton/index'
import style from '../../assets/css/Home.module.css'
import savings from '../../assets/img/savings.svg'

const Home = () => {
  return (
    <section className={style.home}>
      <div className={style.home_container}>
        <article className={style.article}>
          <h1>Bem vindo ao <span>Costs</span></h1>
          <p>Comece a gerenciar os seus projetos agora mesmo!</p>
          <LinkButton toWhere='/newProject' text='Criar Projeto'/>
        </article>
        <img className={style.img} src={savings} alt="" />
      </div>
    </section>
  )
}

export default Home