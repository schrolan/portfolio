import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Container from './components/container'
import Footer from './components/footer'
import Screen from './components/screen'
import About from './pages/aboutMe'
import Resume from './pages/resume'
import Projects from './pages/projects'
import Certificate from './pages/certificate'
import Contact from './pages/contact'
import './index.css'; 

import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Screen>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certificate' element={<Certificate />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Screen>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
