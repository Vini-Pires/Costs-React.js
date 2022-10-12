import React from 'react'
import style from './style.module.css'
import Input from '../../layout/Form/Input/index'
import SubmitButton from '../../layout/Form/SubmitButton/index'
import Select from '../../layout/Form/Select/index'

const placeholderNome = 'Insira o nome do projeto'
const placeholderValor = 'Insira o orçamento total do projeto'


const ProjectForm = ({btnText}) => {
  return (
    <form className={style.form}>
      <Input type='text' placeholder={placeholderNome} name='name' text='Nome do Projeto'/>
      <Input type='number' placeholder={placeholderValor} name='budget' text='Orçamento Total'/>
      <Select name='category_id' text='Selecione a categoria'></Select>
      <SubmitButton text={btnText}/>
    </form>
  )
}

export default ProjectForm