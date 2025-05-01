import { useState } from "react"
import { Link } from "react-router-dom"
  //assets
import "./Header.css"
  import Logo from '../../assets/Logo.svg'
  import Button from '../Bottton/Botton'

function Header(){

  const [Aberto, pegarAbeto] = useState(false)

  const toggleMenu = () =>{
    pegarAbeto(!Aberto)
  } 
    return(
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                  <Link to="/"> <img src={Logo}/></Link>

                  <div className="mobile-menu">

                    <Button buttonStyle="secondary" title="menu" onClick={toggleMenu}>
                      Menu
                    </Button>

                  </div>
                  <nav className={`${Aberto ? "open" : ""}`}>


                    <Button buttonStyle="unstyled" className="mobile-menu close-btn" onClick={toggleMenu}>
                      X
                    </Button>

                    <ul className="d-flex">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                </div>
              
            </div>
        </header>
    )
}

export default Header