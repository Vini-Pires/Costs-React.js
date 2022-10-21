import "assets/css/root.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "pages/Home"
import Company from "pages/Company"
import Contact from "pages/Contact"
import NewProject from "pages/NewProject"
import Projects from "pages/Projects"
import Container from "components/layout/Container"
import Header from "components/layout/Header"
import Footer from "components/layout/Footer"

function App() {
  return (
    <Router>
      <Header />
      <Container customClass='grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newProject' element={<NewProject />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/company' element={<Company />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
