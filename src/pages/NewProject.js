import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectForm from 'components/project/ProjectForm';

import style from 'assets/css/NewProject.module.css';

function NewProject() {
  const navigate = useNavigate();

  const createPost = (project) => {
    if (project.category !== undefined) {
      project.cost = 0;
      project.service = [];

      const url = 'http://localhost:1331/projects';
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(project),
      })
        .then((res) => res.json())
        .then(() => {
          // redirect
          navigate('/projects', {
            state: { message: 'Projeto criado com sucesso' },
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className={style.new_project}>
      <div className={style.container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm handleSubmit={createPost} btnText='Criar Projeto' />
      </div>
    </section>
  );
}

export default NewProject;
