
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'



// importando as pagina 

import Home from './pages/Home'
import Abaut from './pages/Abaut'
import Projeto from './pages/Project'
import Contatos from './pages/contatos'
import screenTop from './pages/util/ScrollTpo'




function App() {


  return (
    <>
     <Router>
      <screenTop/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<Abaut/>}></Route>
        <Route path="/projects" element={<Projeto/>}></Route>
        <Route path="/contact" element={<Contatos/>}></Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
