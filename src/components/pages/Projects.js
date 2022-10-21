import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Message from 'components/layout/Message'
import Container from 'components/layout/Container'
import LinkButton from 'components/layout/LinkButton'
import ProjectCard from 'components/project/ProjectCard'
import style from  'assets/css/Projects.module.css'

const Projects = ()  => {
  
  let message = ''
  const [projects, setProjects] = useState([]);
  const location = useLocation()

  if (location.state) {
    message = location.state.message
  }
  useEffect(() => {
    let url = 'http://localhost:1212/projects'
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
      },
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setProjects(data)
    })
    .catch(err => console.log(err))

  }, []);
  return (
    <section className={style.projects}>
      <div className={style.projects_title}>
        <h1>Meus Projetos</h1>
        <LinkButton toWhere='/newProject' text='Criar Projeto'/>
      </div>
      {message && <Message message={message} type='success'/>}
      <Container customClass='start'>
        {projects.length > 0 &&
          projects.map(e => (
                <ProjectCard name={e.name} id={e.id} budget={e.budget} category={e.category.name} handleRemove='none' key={e.id} />
            )
          )
        }
      </Container>
    </section>
    )
}

export default Projects