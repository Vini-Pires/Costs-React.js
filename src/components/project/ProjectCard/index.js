import React from "react"
import { Link } from "react-router-dom"
import style from "./style.module.css"
import ImportedIcons from "assets/icons/icons"

const ProjectCard = ({ name, budget, category, id, handleRemove }) => {
  return (
    <div id={id} className={style.project_card}>
      <h4 className={style.project_card_title}>{name}</h4>
      <div>
        <p className={style.project_card_paragraph}>
          <span>Orçamento</span> R${budget}
        </p>
        <p
          className={`${style.project_card_paragraph} ${style.project_category}`}
        >
          <span className={style[category.toLowerCase()]}></span> {category}
        </p>
      </div>
      <div className={style.project_card_actions}>
        <Link>
          <ImportedIcons.PENCIL /> Editar
        </Link>
        <button>
          <ImportedIcons.TRASH /> Remover
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
