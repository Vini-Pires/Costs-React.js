import './assets/css/root.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'
import Container from './components/layout/Container/index';
import Header from './components/layout/Header/index';
import Footer from './components/layout/Footer/index';


function App() {
  return (
    <Router>
      <Header/>
      <Container customClass='grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newProject' element={<NewProject />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/company' element={<Company />} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
