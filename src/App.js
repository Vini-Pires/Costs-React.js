import './assets/css/App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container/index';


function App() {
  return (
    <Router>
      <ul>
        <li><Link to='/'>Home</Link> </li>
        <li><Link to='/projects'>Projetos</Link> </li>
        <li><Link to='/company'>Companhia</Link> </li>
        <li><Link to='/contact'>Contatos</Link> </li>
      </ul>
      {/* Will be replaced for a component Header */}
      <Container customClass='min-height'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newProject' element={<NewProject />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/company' element={<Company />} />
        </Routes>
      </Container>
      <footer>footer</footer> {/* Will be replaced for a component Footer */}
    </Router>
  );
}

export default App;
