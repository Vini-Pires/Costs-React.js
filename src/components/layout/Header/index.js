import React from "react"
import { Link } from "react-router-dom"
import logo from "assets/img/costs_logo.png"
import Container from "components/layout/Container"
import style from "./style.module.css"

const Header = () => {
  return (
    <header>
      <nav className={style.nav_bar}>
        <Container>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
          <ul className={style.list}>
            <li className={style.item}>
              <Link to='/'>Home</Link>
            </li>
            <li className={style.item}>
              <Link to='/projects'>Projetos</Link>
            </li>
            <li className={style.item}>
              <Link to='/company'>Empresa</Link>
            </li>
            <li className={style.item}>
              <Link to='/contact'>Contatos</Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  )
}

export default Header
