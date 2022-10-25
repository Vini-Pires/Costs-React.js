import React from 'react';
import LinkButton from 'components/layout/LinkButton';
import style from 'assets/css/Home.module.css';
import savings from 'assets/img/savings.svg';

function Home() {
  return (
    <section className={style.home}>
      <div className={style.home_container}>
        <article className={style.article}>
          <h1>
            Bem vindo ao <span>Costs</span>
          </h1>
          <p>Comece a gerenciar os seus projetos agora mesmo!</p>
          <LinkButton
            toWhere='/newProject'
            text='Criar Projeto'
            animation='pulse'
          />
        </article>
        <img className={style.img} src={savings} alt='' />
      </div>
    </section>
  );
}

export default Home;

// "prettier.arrowParens": "avoid",
// "prettier.jsxSingleQuote": true,
// "prettier.semi": false,
