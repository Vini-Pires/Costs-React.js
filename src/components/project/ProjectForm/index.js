import React, { useEffect, useState } from 'react';
import SubmitButton from 'components/layout/Form/SubmitButton';
import Select from 'components/layout/Form/Select';
import Input from 'components/layout/Form/Input';
import style from './style.module.css';

const placeholderNome = 'Insira o nome do projeto';
const placeholderValor = 'Insira o orçamento total do projeto';

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    const url = 'http://localhost:1331/categories';
    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.warn(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: [e.target.value] });
  };

  const handleCategory = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  };

  return (
    <form onSubmit={submit} className={style.form}>
      <Input
        handleOnChange={handleChange}
        type='text'
        placeholder={placeholderNome}
        name='name'
        text='Nome do Projeto'
        value={project.name ? project.name : ''}
      />

      <Input
        handleOnChange={handleChange}
        type='number'
        placeholder={placeholderValor}
        name='budget'
        text='Orçamento Total'
        value={project.budget ? project.budget : ''}
      />

      <Select
        name='category_id'
        options={categories}
        text='Selecione a categoria'
        value={project.category ? project.category.id : ''}
        handleOnChange={handleCategory}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
